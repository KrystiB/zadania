import './App.css';
import LoggedInStatus from './components/LoggedInStatus';
import LoginButton from './components/LoginButton';
import Menu from './components/Menu';
import ProtectedWrapper from './components/ProtectedWrapper';
import BankForm from './components/BankForm';

function App() {
    return (
        <div>
            <ProtectedWrapper>
                <Menu />
                <LoggedInStatus />
                <LoginButton></LoginButton>
                <BankForm></BankForm>
            </ProtectedWrapper>
        </div>
    );
}

export default App;
