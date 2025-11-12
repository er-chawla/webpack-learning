import React, { Suspense } from 'react';
import { Routes, useLocation, Route, useNavigate } from 'react-router-dom';
import './App.scss';
const HomePage = React.lazy(() => import('homePage/HomePage'));
const DetailPage = React.lazy(() => import('detailPage/DetailPage'));
const SeatSelectionPage = React.lazy(() =>
    import('seatSelection/SeatSelection')
);

const App = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const clickMovieItem = (item) => {
        navigate(`/details/${item.id}`);
    };

    return (
        <Routes>
            <Route
                path="/details/:id"
                element={
                    <Suspense fallback={null}>
                        <DetailPage
                            routing={{ navigate, location }}
                        ></DetailPage>
                    </Suspense>
                }
            ></Route>
            <Route
                path="/book"
                element={
                    <Suspense fallback={null}>
                        <SeatSelectionPage></SeatSelectionPage>
                    </Suspense>
                }
            ></Route>
            <Route
                path="/"
                element={
                    <Suspense fallback={null}>
                        <HomePage
                            movieClicked={clickMovieItem}
                            routing={{ navigate, location }}
                        ></HomePage>
                    </Suspense>
                }
            ></Route>
        </Routes>
    );
};

export default App;
