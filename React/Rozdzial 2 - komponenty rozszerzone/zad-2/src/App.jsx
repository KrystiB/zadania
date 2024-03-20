import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts'
                );
                if (!response.ok) {
                    throw new Error('Wystąpił błąd podczas pobierania danych');
                }
                const data = await response.json();
                setPost(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };
        fetchPost();
    }, []);

    return (
        <div>
            {isLoading ? (
                <p>Ładowanie...</p>
            ) : post ? (
                <div>
                    <h2>{post[0].title}</h2>
                    <p>{post[0].body}</p>
                </div>
            ) : (
                <p>Nie udało się załadować danych</p>
            )}
        </div>
    );
}

export default App;
