import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Pages/Login/Login.jsx';
import Movies from './Pages/Movies/Movies.jsx';

const route = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/movies',
        element: <Movies />,
    },
    {
        path: '/',
        element: <Login />,
    },
]);

const App = () => {
    return (
        <div className="App">
            <RouterProvider router={route}></RouterProvider>
        </div>
    );
};

export default App;
