import './login.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Button from '../../components/button/Button.jsx';
import Signin from '../../components/signIn/signin.jsx';

function Login() {
    const navigate = useNavigate();

    const signInToMoviesNow = () => {
        console.log('movie');
        navigate('/movies');
    };

    return (
        <div className="background">
            <header>
                <img className="logo-img" src={logo} alt="logo" />
                <div>
                    <Button title="Sign In" onClick={signInToMoviesNow} />
                </div>
            </header>
            <main>
                <Signin />
                {/* <h1>Watch TV Shows , Movies !!</h1>
        <h3> Subscribe now , Cancel anytime</h3> */}
            </main>
        </div>
    );
}

export default Login;
