import React from 'react';
import logo from '../assets/images/logo.png';
import './QuickBooking.scss';
import { Suspense, useState } from 'react';
const Dropdown = React.lazy(() => import('components/Dropdown'));

const QuickBooking = ({ props }) => {
    const [movie, setMovie] = useState('1');
    const [date, setDate] = useState('11/11/2025');
    const [time, setTime] = useState('10 Am');

    const bookMovie = () => {
        const booking = {
            movie,
            date,
            time,
        };
        console.log(booking);
    };

    const renderMovies = () => {
        const movies = props.map((movie) => {
            return {
                value: movie.id,
                text: movie.name,
            };
        });
        return (
            <Suspense fallback={null}>
                <Dropdown
                    options={movies}
                    changeEvent={(e) => {
                        console.log(e.target.value);
                        setMovie(e.target.value);
                    }}
                />
            </Suspense>
        );
    };
    return (
        <div className="quick-booking-container">
            <img src={logo} width={60} height={60} />
            <div className="quick-booking-section">
                <div className="quick-booking-movie">
                    <span>Movies: </span>
                    {renderMovies()}
                </div>
                <div className="quick-book-date">
                    <span>Select Date: </span>
                    <select onChange={() => setDate()} value={date}>
                        <option value="11/11/2025">11/11/2025</option>
                        <option value="12/11/2025">12/11/2025</option>
                        <option value="13/11/2025">13/11/2025</option>
                        <option value="14/11/2025">14/11/2025</option>
                        <option value="15/11/2025">15/11/2025</option>
                    </select>
                </div>
                <div className="quick-booking-time">
                    <select onChange={() => setTime()} value={time}>
                        <option value="10 Am">10 Am</option>
                        <option value="12:30 PM">12:30 PM</option>
                        <option value="4 PM">4 PM</option>
                        <option value="8 PM">8 PM</option>
                        <option value="9:30 PM">9:30 PM</option>
                    </select>
                </div>
                <button onClick={() => bookMovie()}>Book Movie</button>
            </div>
        </div>
    );
};

export default QuickBooking;
