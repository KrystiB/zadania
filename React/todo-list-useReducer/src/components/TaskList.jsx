import { useState } from 'react';

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    // type="text"
                    value={task.text}
                    onChange={(e) => {
                        onChange({ ...task, text: e.target.value });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Zapisz</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edytuj</button>
            </>
        );
    }

    return (
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                    onChange({
                        ...task,
                        done: e.target.checked,
                    });
                }}
            />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>Usuń</button>
        </label>
    );
}

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <Task
                        task={task}
                        onChange={onChangeTask}
                        onDelete={onDeleteTask}
                    ></Task>
                </li>
            ))}
        </ul>
    );
}
