import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');
    const [info, setInfo] = useState(false);
    const [editedId, setEditedId] = useState(null);

    const addTodo = (todo) => {
        if (input.trim() === '') {
            setInfo(true);
            return;
        }
        setInfo(false);

        if (editedId !== null) {
            setList((prev) =>
                prev.map((prevItem) =>
                    prevItem.id === editedId ? { ...prevItem, todo: input } : prevItem
                )
            );
            setEditedId(null);
            setInput('');
        } else {
            const newTodo = {
                id: Date.now(),
                todo: todo,
                done: false,
            };
            setList((prev) => [...prev, newTodo]);
            setInput('');
        }
    };

    const deleteTodo = (id) => {
        setList((prev) => prev.filter((element) => element.id !== id));
    };

    const changeTodo = (id, todo) => {
        setEditedId(id);
        setInput(todo);
    };

    const checkBoxChange = (id, checked) => {
        const updatedList = list.map((item) => {
            if (item.id === id) {
                return { ...item, done: checked };
            }
            return item;
        });
        setList(updatedList);
    };

    return (
        <div className="app">
            <h1>ToDo List</h1>
            <div className="flex-row">
                <input
                    type="text"
                    value={input}
                    onChange={(element) => setInput(element.target.value)}
                    className="todo-input"
                    placeholder="Wpisz zadania na dziś"
                />
                <button type="submit" onClick={() => addTodo(input)} className="todo-btn">
                    {editedId ? 'Zapisz' : 'Dodaj'} zadanie
                </button>
            </div>
            {info ? <div className="info-text">Nie może być puste</div> : ''}
            <ul className="todo-list">
                {list.map((element) => {
                    return (
                        <li
                            key={element.id}
                            className={`todo-item ${element.done ? 'done' : ''}`}
                        >
                            <input
                                type="checkbox"
                                checked={element.done}
                                onChange={(event) =>
                                    checkBoxChange(element.id, event.target.checked)
                                }
                            />
                            <span className="todo-text">{element.todo}</span>
                            <div>
                                <button
                                    onClick={() => deleteTodo(element.id)}
                                    className="delete-button"
                                >
                                    <FontAwesomeIcon icon={faTrash} size="2x" />
                                </button>
                                <button
                                    onClick={() => changeTodo(element.id, element.todo)}
                                    className="edit-button"
                                >
                                    Edytuj
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
