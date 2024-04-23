import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
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

    const addTodo = useCallback(
        (todo) => {
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
        },
        [input, editedId, setList, setEditedId, setInput, setError]
    );

    const deleteTodo = useCallback(
        (id) => {
            setList((prev) => prev.filter((element) => element.id !== id));
            if (editedId === id) {
                setInput('');
                setEditedId(null);
            }
        },
        [setList, editedId, setInput]
    );

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
        <TodoContext.Provider
            value={{
                addTodo,
                error,
                editedId,
                setInput,
                input,
                list,
                checkBoxChange,
                deleteTodo,
                changeTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

const useTodoContext = () => useContext(TodoContext);

export { TodoProvider, useTodoContext };
