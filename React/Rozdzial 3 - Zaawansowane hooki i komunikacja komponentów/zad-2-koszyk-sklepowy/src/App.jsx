import { useReducer, useState } from 'react';
import './App.css';

const initialState = {
    cartItems: [
        {
            name: 'Słonecznik',
            id: 1,
            count: 1,
            price: 10,
        },
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case 'add_item': {
            const productIsInCart = state.cartItems.find(
                (item) => item.name === action.payload.name
            );
            if (productIsInCart) {
                const updatedCartItems = state.cartItems.map((item) => {
                    if (item.name === action.payload.name) {
                        return { ...item, count: item.count + action.payload.count };
                    }
                    return item;
                });
                return { ...state, cartItems: updatedCartItems };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload }],
                };
            }
        }
        case 'remove_item': {
            const filteredItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
            return { ...state, cartItems: filteredItems };
        }
        case 'remove_all_items':
            return { ...state, cartItems: [] };
        case 'increase_item_count': {
            const updatedCartItems = state.cartItems.map((item) => {
                if (item.name === action.payload.name) {
                    return { ...item, count: item.count + 1 };
                }
                return item;
            });
            return { ...state, cartItems: updatedCartItems };
        }
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemCount, setItemCount] = useState('');

    const addItemToCart = () => {
        if (!itemName || !itemPrice || !itemCount) {
            alert('Uzupełnij wszystkie pola');
            return;
        }
        if (itemPrice <= 0 || itemCount <= 0) {
            alert('Cena oraz ilość musi być większe niż 0');
            return;
        }
        const newItem = {
            name: itemName,
            id: Date.now(),
            price: parseFloat(itemPrice),
            count: parseInt(itemCount),
        };
        dispatch({ type: 'add_item', payload: newItem });

        setItemName('');
        setItemCount('');
        setItemPrice('');
    };

    const removeItemFromCart = (itemId) => {
        dispatch({ type: 'remove_item', payload: itemId });
    };

    const removeAllItemsFromCart = () => {
        dispatch({ type: 'remove_all_items' });
    };

    const total = (item) => {
        return item.price * item.count;
    };

    const totalPrice = () => {
        return state.cartItems.reduce(
            (total, item) => total + item.price * item.count,
            0
        );
    };

    const increaseItemCount = (itemName) => {
        dispatch({ type: 'increase_item_count', payload: { name: itemName } });
    };
    return (
        <div className="cart">
            <h1>Koszyk sklepowy</h1>
            {state.cartItems.length === 0 ? (
                <p className="cart-empty">Koszyk jest pusty</p>
            ) : (
                <div>
                    {state.cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <p>
                                {item.name} - Cena: {item.price} zł - Ilość: {item.count}{' '}
                                - Suma: {total(item)}
                            </p>
                            <div>
                                <button onClick={() => increaseItemCount(item.name)}>
                                    Dodaj ilość
                                </button>
                                <button onClick={() => removeItemFromCart(item.id)}>
                                    Usuń
                                </button>
                            </div>
                        </div>
                    ))}

                    <p className="cart-total">
                        Suma wartości w koszyku: {totalPrice()} zł
                    </p>
                    <button
                        className="cart-button"
                        onClick={() => removeAllItemsFromCart()}
                    >
                        Wyczyść koszyk
                    </button>
                </div>
            )}
            <div className="input-group">
                <input
                    type="text"
                    value={itemName}
                    onChange={(element) => setItemName(element.target.value)}
                    placeholder="Nazwa przedmiotu"
                />
                <input
                    type="number"
                    value={itemPrice}
                    onChange={(element) => setItemPrice(element.target.value)}
                    placeholder="Cena produktu"
                />
                <input
                    type="number"
                    value={itemCount}
                    onChange={(element) => setItemCount(element.target.value)}
                    placeholder="Ilość produktu"
                />
                <button onClick={addItemToCart}>Dodaj przedmiot</button>
            </div>
        </div>
    );
}

export default App;
