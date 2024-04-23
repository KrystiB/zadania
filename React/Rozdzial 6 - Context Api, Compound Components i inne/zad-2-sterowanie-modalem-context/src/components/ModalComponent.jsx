const ModalComponent = ({ cancelChanges, saveChanges }) => {
    const handleConfirm = () => {
        saveChanges();
    };
    const handleCancel = () => {
        cancelChanges();
    };

    return (
        <div>
            <div>
                <h2>Czy na pewno chcesz kontynuować?</h2>
                <button onClick={handleConfirm}>Tak, zapisz zmiany</button>
                <button onClick={handleCancel}>Nie, anuluj</button>
            </div>
        </div>
    );
};

export default ModalComponent;
