import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../bankSlice';

const BankForm = () => {
    const [amount, setAmount] = useState('');
    const [operation, setOperation] = useState('deposit');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const balance = useSelector((state) => state.bank.balance);

    const handleSubmit = (event) => {
        event.preventDefault();
        const amountValue = parseFloat(amount);
        if (amountValue <= 0) {
            setError('Podaj poprawioną kwotę.');
            return;
        }
        setError('');
        if (operation === 'deposit') {
            dispatch(deposit(amountValue));
        } else if (operation === 'withdraw') {
            if (balance >= amountValue) {
                dispatch(withdraw(amountValue));
            } else {
                setError('Nie masz wystarczającej ilości środków.');
            }
        }
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Kwota:
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </label>
            <div>
                <label>
                    <input
                        type="radio"
                        value="deposit"
                        checked={operation === 'deposit'}
                        onChange={() => setOperation('deposit')}
                    />
                    Wpłata
                </label>
                <label>
                    <input
                        type="radio"
                        value="withdraw"
                        checked={operation === 'withdraw'}
                        onChange={() => setOperation('withdraw')}
                    />
                    Wypłata
                </label>
            </div>
            <button type="submit">Wykonaj operację</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default BankForm;
