import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { TodoProvider } from './components/TodoProvider';

function App() {
    return (
        <TodoProvider>
            <div className="app">
                <h1>ToDo List</h1>
                <TodoInput />
                <TodoList />
            </div>
        </TodoProvider>
    );
}

export default App;
