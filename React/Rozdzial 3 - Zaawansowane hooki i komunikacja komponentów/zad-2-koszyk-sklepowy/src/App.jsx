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
        const newItem = {
            name: itemName,
            id: Date.now(),
            price: itemPrice,
            count: itemCount,
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
        return item.price * item.count
    }
    return (
        <>
            <h1>Koszyk sklepowy</h1>
            {state.cartItems.length === 0 ? (
                <p>Koszyk jest pusty</p>
            ) : (
                <div>
                    {state.cartItems.map((item) => (
                        <div key={item.id}>
                            <p>
                                {item.name} - Cena: {item.price} zł - Ilość: {item.count} - Suma: {total(item)}
                            </p>
                            <button onClick={() => addItemToCart(item)}>Dodaj</button>
                            <button onClick={() => removeItemFromCart(item.id)}>
                                Usuń
                            </button>
                        </div>
                    ))}
                    <button onClick={() => removeAllItemsFromCart()}>
                        Wyczyść koszyk
                    </button>
                    <p>Suma przedmiotów w koszyku: </p>
                </div>
            )}
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
        </>
    );
}
export default App;
