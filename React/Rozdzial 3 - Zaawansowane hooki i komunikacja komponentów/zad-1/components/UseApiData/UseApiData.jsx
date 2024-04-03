import { useEffect, useState } from 'react';

const UseApiData = (apiUrl) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 5000));
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Błąd podczas pobierania danych');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [apiUrl]);

    return { isLoading, data };
};

export default UseApiData;
