import { useState } from "react";

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');
    return (
        <>
            <input
                type="text"
                placeholder="dodaj zadanie"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    setText('');
                    onAddTask(text);
                }}
            >Dodaj</button>
        </>
    );
}