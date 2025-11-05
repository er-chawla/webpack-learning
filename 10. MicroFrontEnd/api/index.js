const express = require('express');
const cors = require('cors');
const path = require('path');
const movieData = require('./moviesData.json');

const app = express();

const PORT = 5555;
app.use(cors());
app.use(express.static('public'));

app.get('/movies', (req, res) => {
    return res.send(movieData);
});

app.get('/movies/:id', (req, res) => {
    const movie = movieData.find(
        (movie) => movie.id === parseInt(req.params.id)
    );

    if (movie) {
        const options = {
            root: path.join(__dirname, 'public/images/'),
        };

        res.sendFile(movie.imageUrl, options, (err) => {
            if (err) {
                return res.sendStatus(404);
            } else {
                console.log('File sent to client');
            }
        });
    } else {
        return res.status(404).send('Not found');
    }
});

app.listen(PORT, () => {
    console.log(`api is listening on ${PORT}`);
});
