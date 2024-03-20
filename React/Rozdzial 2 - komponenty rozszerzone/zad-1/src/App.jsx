import { useState } from 'react';
import './App.css';

const initialData = {
    human: {
        sex: 'man',
        surname: 'Detic',
    },
    accountBalance: 1000,
};

function App() {
    const [{human, accountBalance}, setData] = useState(initialData);

    const handleSexChange = () => {
        setData((prevData) => ({
            ...prevData,
            human: {
                ...prevData.human,
                sex: prevData.human.sex === 'man' ? 'woman' : 'man',
            },
        }));
    };

    const handleBuy = () => {
        setData((prevData) => ({
            ...prevData,
            accountBalance: prevData.accountBalance - 500,
        }));
    };

    const handleSell = () => {
        setData((prevData) => ({
            ...prevData,
            accountBalance: prevData.accountBalance + 500,
        }));
    };

    return (
        <>
            <p>Płeć: {human.sex}</p>
            <p>Nazwisko: {human.surname}</p>
            <p>Bilans Konta: {accountBalance}</p>
            <button onClick={handleSexChange}>Toggle Sex</button>
            <button onClick={handleBuy}>Buy (-500)</button>
            <button onClick={handleSell}>Sell (+500)</button>
        </>
    );
}

export default App;
