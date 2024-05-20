import LoginButton from './LoginButton';
import { useSelector } from 'react-redux';

const ProtectedWrapper = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    if (!isLoggedIn) {
        return <LoginButton></LoginButton>;
    }
    return (
        <>
            {children}
        </>
    );
};

export default ProtectedWrapper;
