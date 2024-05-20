import { login, logout } from '../authSlice';
import { useDispatch, useSelector } from 'react-redux';
const LoginButton = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const handleLogin = () => {
        if (isLoggedIn) {
            dispatch(logout());
        } else {
            dispatch(login());
        }
    };

    return (
        <div>
            <button onClick={handleLogin}>{!isLoggedIn ? 'Zaloguj' : 'Wyloguj'}</button>
        </div>
    );
};

export default LoginButton;
