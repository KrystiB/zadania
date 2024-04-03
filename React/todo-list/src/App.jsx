import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiMinus, mdiPlus } from '@mdi/js';
import './App.css';

function App() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = (element) => {
        if (input.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                todo: element,
            };

            setList([...list, newTodo]);
            setInput('');
        }
        console.log(element);
    };

    const deleteTodo = (id) => {
        const newList = list.filter((element) => element.id !== id);
console.log(newList);
        setList(newList);

        
    };

    return (
        <>
            <h1>ToDo List</h1>
            <input
                type="text"
                value={input}
                onChange={(element) => setInput(element.target.value)}
            />
            <button onClick={() => addTodo(input)}>
                Add
                <Icon path={mdiPlus} size={0.7} />
            </button>
            <ul>
                {list.map((element) => {
                    return (
                        <li key={element.id}>
                            {element.todo}
                            <button onClick={() => deleteTodo(element.id)}>
                                <Icon path={mdiMinus} size={0.7} />
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default App;
