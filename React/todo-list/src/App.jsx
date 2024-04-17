import { useEffect, useState } from 'react';
import './App.css';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

function App() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const [editedId, setEditedId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/todos'
                );
                if (!response.ok) {
                    throw new Error('Błąd sieci');
                }
                const data = await response.json();
                setList(
                    data.map((item) => ({
                        id: `${item.id} + fetchTodo`,
                        todo: item.title,
                        done: item.completed,
                    }))
                );
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const addTodo = (todo) => {
        if (input.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        if (editedId !== null) {
            setList((prev) =>
                prev.map((prevItem) =>
                    prevItem.id === editedId ? { ...prevItem, todo: input } : prevItem
                )
            );
            setEditedId(null);
            setInput('');
            return;
        }
        const newTodo = {
            id: Date.now(),
            todo: todo,
            done: false,
        };
        setList((prev) => [...prev, newTodo]);
        setInput('');
    };

    const deleteTodo = (id) => {
        setList((prev) => prev.filter((element) => element.id !== id));
        if (editedId === id) {
            setInput('');
            setEditedId(null);
        }
    };

    const changeTodo = (id, todo) => {
        setEditedId(id);
        setInput(todo);
    };

    const checkBoxChange = (id, checked) => {
        setList(
            list.map((item) => {
                if (item.id === id) {
                    return { ...item, done: checked };
                }
                return item;
            })
        );
    };

    return (
        <div className="app">
            <h1>ToDo List</h1>
            <TodoInput
                addTodo={addTodo}
                error={error}
                editedId={editedId}
                input={input}
                setInput={setInput}
            />
            <TodoList
                list={[...list].reverse()}
                checkBoxChange={checkBoxChange}
                deleteTodo={deleteTodo}
                changeTodo={changeTodo}
            />
        </div>
    );
}

export default App;
