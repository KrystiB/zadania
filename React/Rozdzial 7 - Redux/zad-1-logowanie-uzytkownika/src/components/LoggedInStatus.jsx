import { useSelector } from 'react-redux';

const LoggedInStatus = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return (
        <div>{isLoggedIn ? <p>Jesteś zalogowany</p> : <p>Nie jesteś zalogowany</p>}</div>
    );
};

export default LoggedInStatus;