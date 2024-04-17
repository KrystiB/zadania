function TodoInput({ addTodo, error, editedId, setInput, input}) {


    return (
        <div className="flex-row">
            <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="todo-input"
                placeholder="Wpisz zadania na dziś"
            />
            <button type="submit" onClick={() => addTodo(input)} className="todo-btn">
                {editedId ? 'Zapisz' : 'Dodaj'} zadanie
            </button>
            {error ? <div className="info-text">Nie może być puste</div> : ''}
        </div>
    );
}

export default TodoInput;