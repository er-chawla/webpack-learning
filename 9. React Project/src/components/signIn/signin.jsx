import Button from '../button/Button.jsx';
// import Header from '../../components/header/header';
import Inputbox from '../inputbox/inputbox.jsx';
import './signin.scss';
import { useNavigate } from 'react-router-dom';
function Signin() {
    const navigate = useNavigate();

    const loginToSite = () => {
        navigate('/movies');
    };

    return (
        <div className="signin-container">
            <h1>Sign In</h1>
            <Inputbox placeholder="Enter Username" error="someerror" />
            <Inputbox placeholder="Enter Password" />
            <Button
                className="signin-btn"
                title="Sign In"
                onClick={loginToSite}
            />
            {/* <Header></Header> */}
        </div>
    );
}

export default Signin;
