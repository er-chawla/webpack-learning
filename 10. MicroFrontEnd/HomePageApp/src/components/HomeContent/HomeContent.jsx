import React from 'react';
import QuickBooking from '../QuickBooking/QuickBooking.jsx';
import { Suspense, useEffect, useState } from 'react';
const MovieCard = React.lazy(() => import('components/MovieCard'));
import './HomeContent.scss';
import ReactRouterContext from '../../utils/ReactRouter.js';
const dummyItem = [{ name: 'Dummy Movie', id: 'xuz' }];
const HomeContent = ({ movieClicked, routing }) => {
    const [movies, setMovies] = useState(dummyItem);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('http://localhost:5555/movies');
            const result = await response.json();
            setMovies(result);
        };

        fetchMovies();
    }, []);

    const renderMoviesList = () => {
        return movies.map((movie) => {
            const id = movie.id;
            return (
                <div
                    className="movie"
                    key={id}
                    onClick={() => movieClicked(movie)}
                >
                    <MovieCard title={movie.name} imageUrl={movie.imageUrl} />
                </div>
            );
        });
    };

    return (
        <div className="home-content-container">
            <ReactRouterContext.Provider value={{ routing }}>
                <QuickBooking props={movies} />
                <div className="movie-lists">
                    <Suspense fallback={null}>{renderMoviesList()}</Suspense>
                </div>
            </ReactRouterContext.Provider>
        </div>
    );
};

export default HomeContent;
