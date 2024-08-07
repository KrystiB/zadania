import { useState } from 'react';
import { useImmer } from 'use-immer';
import './App.css';

const initialData = {
    human: {
        sex: 'man',
        surname: 'Detic',
    },
    accountBalance: 1000,
};

function App() {
    const [{ human, accountBalance }, setData] = useState(initialData);
    const [person, updatePerson] = useImmer(initialData);

    // const handleSexChange = () => {
    //     setData((previousData) => ({
    //         ...previousData,
    //         human: {
    //             ...previousData.human,
    //             sex: previousData.human.sex === 'man' ? 'woman' : 'man',
    //         },
    //     }));
    // };

    const handleSexChange = () => {
        updatePerson(draft => {
            draft.human.sex = draft.human.sex === 'man' ? 'woman' : 'man';
        });
    };
    const handleBuy = () => {
        setData((previousData) => ({
            ...previousData,
            accountBalance: previousData.accountBalance - 500,
        }));
    };

    const handleSell = () => {
        setData((previousData) => ({
            ...previousData,
            accountBalance: previousData.accountBalance + 500,
        }));
    };

    return (
        <>
            <p>Płeć: {person.human.sex}</p>
            <p>Nazwisko: {human.surname}</p>
            <p>Bilans Konta: {accountBalance}</p>
            <button onClick={handleSexChange}>Toggle Sex</button>
            <button onClick={handleBuy}>Buy (-500)</button>
            <button onClick={handleSell}>Sell (+500)</button>
        </>
    );
}

export default App;
