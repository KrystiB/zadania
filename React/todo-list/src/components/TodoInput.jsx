import { useTodoContext } from './TodoProvider';

function TodoInput() {
    const { addTodo, error, editedId, setInput, input } = useTodoContext();

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleAddTodo = () => {
        addTodo(input)
    }

    return (
        <div className="flex-row">
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                className="todo-input"
                placeholder="Wpisz zadania na dziś"
            />
            <button type="submit" onClick={handleAddTodo} className="todo-btn">
                {editedId ? 'Zapisz' : 'Dodaj'} zadanie
            </button>
            {error ? <div className="info-text">Nie może być puste</div> : ''}
        </div>
    );
}

export default TodoInput;
