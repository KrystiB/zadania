import './App.css';

function App() {
    const menu = [
        {
            link: '/faktury',
            name: 'faktury',
        },
        {
            link: '/dokumenty',
            name: 'dokumenty',
        },
        {
            link: '/odczyty',
            name: 'odczyty',
        },
        {
            link: '/kontakt',
            name: 'kontakt',
        },
    ];

    return (
        <>
            <nav>
                <div className="menu">
                    <ul className="menu__list">
                        {menu.map((item, index) => (
                            <li key={index} className="menu__item">
                                <button className="button">
                                    <a href={item.link}>{item.name}</a>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default App;
