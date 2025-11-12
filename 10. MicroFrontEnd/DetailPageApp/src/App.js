import React from 'react';
import DetailsContent from './components/DetailContent/DetailsContent.jsx';
import './App.scss';
const App = ({ routing }) => {
    return (
        <div className="App">
            <DetailsContent routing={routing}></DetailsContent>
        </div>
    );
};

export default App;
