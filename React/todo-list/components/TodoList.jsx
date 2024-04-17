import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useMemo } from 'react';

function TodoList({ list, checkBoxChange, deleteTodo, changeTodo }) {
    const memo = useMemo(
        () =>
            list.map((element) => {
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
                        <span
                            className="todo-text"
                            onDoubleClick={() => changeTodo(element.id, element.todo)}
                        >
                            {element.todo}
                        </span>
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
            }),
        [list, checkBoxChange, deleteTodo, changeTodo]
    );
    return <ul className="todo-list">{memo}</ul>;
}

export default TodoList;
