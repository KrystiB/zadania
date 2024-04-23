import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useTodoContext } from './TodoProvider';

function TodoList() {
    const { list, checkBoxChange, deleteTodo, changeTodo } = useTodoContext();

    const handleCheckboxChange = (id, checked) => {
        checkBoxChange(id, checked);
    };

    const handleEditTask = (id, todo) => {
        changeTodo(id, todo);
    };

    const handleDeleteButtonClick = (id) => {
        deleteTodo(id);
    };
    const renderedTodoListItem = ({ id, done, todo }) => {
        return (
            <li key={id} className={`todo-item ${done ? 'done' : ''}`}>
                <input
                    type="checkbox"
                    checked={done}
                    onChange={() => handleCheckboxChange(id, !done)}
                />
                <span
                    className="todo-text"
                    onDoubleClick={() => handleEditTask(id, todo)}
                >
                    {todo}
                </span>
                <div>
                    <button
                        onClick={() => handleDeleteButtonClick(id)}
                        className="delete-button"
                    >
                        <FontAwesomeIcon icon={faTrash} size="2x" />
                    </button>
                    <button
                        onClick={() => handleEditTask(id, todo)}
                        className="edit-button"
                    >
                        Edytuj
                    </button>
                </div>
            </li>
        );
    };

    return <ul>{list.map((element) => renderedTodoListItem(element)).reverse()}</ul>;
}
export default TodoList;
