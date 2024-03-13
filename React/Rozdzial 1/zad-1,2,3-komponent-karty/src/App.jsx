import './App.css';
import { Avatar } from './components/Avatar/Avatar';
import Card from './components/Card/Card';
import { Medals } from './components/Medals/Medals';

const data = [
    {
        name: 'Alfred',
        surname: 'Bogucki',
        avatar: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        background:
            'https://images.unsplash.com/photo-1544200175-ca6e80a7b323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80',
        bronze: 1,
        silver: 3,
        gold: 1,
    },
    {
        name: 'Andrzej',
        surname: 'Mikucki',
        avatar: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        background:
            'https://images.unsplash.com/photo-1544200175-ca6e80a7b323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80',
        bronze: 0,
        silver: 3,
        gold: 4,
    },
];

function App() {
    return (
        <>
            {data.map((person, index) => (
                <Card
                    key={index}
                    background={person.background}
                >
                    <Avatar
                        name={person.name}
                        surname={person.surname}
                        avatar={person.avatar}
                    ></Avatar>
                    <Medals
                        bronze={person.bronze > 0 ? person.bronze : null}
                        silver={person.silver > 0 ? person.silver : null}
                        gold={person.gold > 0 ? person.gold : null}
                    ></Medals>
                </Card>
            ))}
        </>
    );
}

export default App;
