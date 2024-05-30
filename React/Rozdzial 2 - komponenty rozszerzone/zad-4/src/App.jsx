import { useState } from 'react';
import './App.css';
import Modal from '../components/Modal';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="App" style={appStyle}>
            <button onClick={openModal}>Otworz modal</button>
            {isModalOpen && <Modal onClose={closeModal}></Modal>}
            <div style={overlayStyle(isModalOpen)}></div>
        </div>
    );
}

const appStyle = {
    position: 'relative',
    padding: '50px',
    textAlign: 'center',
};

const overlayStyle = (isModalOpen) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(90, 20, 40, 0.9)',
    zIndex: 999,
    display: isModalOpen ? 'block' : 'none',
});

export default App;
