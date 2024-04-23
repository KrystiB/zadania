import { useState } from 'react';
import ModalComponent from './ModalComponent';

const ProfileForm = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const saveChanges = () => {
        console.log('Zapisano zmiany w profilu');
        closeModal();
    };

    const cancelChanges = () => {
        console.log('Nie zapisano zmian');
        closeModal();
    }
    return (
        <div>
            <h1>Edycja profilu</h1>
            <button onClick={openModal}>Zapisz zmiany</button>
            {showModal && (
                <ModalComponent
                    cancelChanges={cancelChanges}
                    saveChanges={saveChanges}
                ></ModalComponent>
            )}
        </div>
    );
};

export default ProfileForm;
