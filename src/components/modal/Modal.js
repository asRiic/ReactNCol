import React, { UseRef, useEffect, useCallback, useRef } from 'react';
import { useSpring, } from 'react-spring';
import '../../assets/css/Modal.css'

function Modal({ showModal, setShowModal }) {

    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    return (
        <>
            {
                showModal ? (
                    <div className="background" onClick={closeModal}>
                        <div className="cont_modal" showModal={showModal}>
                            <h1>Hola pton</h1>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

export default Modal;