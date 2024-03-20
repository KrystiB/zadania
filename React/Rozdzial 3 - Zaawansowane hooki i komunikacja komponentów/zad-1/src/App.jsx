import './App.css';
import { useEffect, useState } from 'react';

const useApiData = (apiUrl) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Błąd podczas pobierania danych');
                }
                const jsonData = await response.json();
                setData(jsonData);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [apiUrl]);
    return { isLoading, data, error };
};

function App() {
    // const { isLoading, data, error } = useApiData('https://api.example.com/data');
    const { isLoading, data, error } = useApiData(
        'https://jsonplaceholder.typicode.com/posts'
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {data.map(({title, body}, index) => (
                <div key={index}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
