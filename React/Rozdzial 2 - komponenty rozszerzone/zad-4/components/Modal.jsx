import { useRef } from "react";
import useClickOutside from "./useClickOutside";


function Modal({onClose}) {
    const modalRef = useRef(null);

    useClickOutside(modalRef, onClose);

    return (
        <div ref={modalRef} className="modal" style={modalStyle}>
            <h2>Modal</h2>
            <button onClick={onClose}>Zamknij Modal</button>
        </div>
    )
}

const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    zIndex: 1000,
  };
  
  export default Modal;