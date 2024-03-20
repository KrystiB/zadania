import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState(null);
    const [expandedRow, setExpandedRow] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 5000));

            const response = [
                {
                    id: 1,
                    name: 'Leanne Graham',
                    username: 'Bret',
                    email: 'Sincere@april.biz',
                    address: {
                        street: 'Kulas Light',
                        suite: 'Apt. 556',
                        city: 'Gwenborough',
                        zipcode: '92998-3874',
                        geo: {
                            lat: '-37.3159',
                            lng: '81.1496',
                        },
                    },
                    phone: '1-770-736-8031 x56442',
                    website: 'hildegard.org',
                    company: {
                        name: 'Romaguera-Crona',
                        catchPhrase: 'Multi-layered client-server neural-net',
                        bs: 'harness real-time e-markets',
                    },
                },
            ];
            setData(response);
            setIsLoading(false);
        };
        fetchData();
    }, []);
    if (isLoading) {
        return <div>Wczytywanie...</div>;
    }
    const handleRowClick = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>User name</th>
                    <th>Email</th>
                    <th>Phone number</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map(
                    (
                        { name, username, email, phone, address, website, company },
                        index
                    ) => [
                        <tr key={index}>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <td>
                                <button onClick={() => handleRowClick(index)}>
                                    {expandedRow === index
                                        ? 'Hide Details'
                                        : 'Show Details'}
                                </button>
                            </td>
                        </tr>,
                        expandedRow === index && (
                            <tr key={`${index}-details`}>
                                <td colSpan="5">
                                    <div>
                                        <p>
                                            Address: {address.street}, {address.suite},{' '}
                                            {address.city}, {address.zipcode}
                                        </p>
                                        <p>Website: {website}</p>
                                        <p>Company: {company.name}</p>
                                        <p>Catch Phrase: {company.catchPhrase}</p>
                                        <p>Business: {company.bs}</p>
                                    </div>
                                </td>
                            </tr>
                        ),
                    ]
                )}
            </tbody>
        </table>
    );
}

export default App;
