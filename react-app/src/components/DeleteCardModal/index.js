import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import { deleteACard } from '../../store/card';


function DeleteCardModal({ card }) {

    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const deleteCard = (e) => {
        e.preventDefault();

        dispatch(deleteACard(card.id))
    }

    const closeModal = () => {
    setShowModal(false);
    }

    return (
    <>
        <div className='' onClick={() => setShowModal(true)}> D </div>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <div className='login-modal-hdr'>
                <div
                className='x'
                onClick={() => setShowModal(false)}
                > X </div>
                <div className='header-lfm blue-text'>
                Delete?
                </div>
            </div>
            <div className='login-form-buttons'>
                <button className="login-button" onClick={deleteCard}>
                    Continue
                </button>
                <button className="login-button" onClick={() => setShowModal(false)}>
                    Cancel
                </button>
            </div>
        </Modal>
        )}
    </>
    );
}

export default DeleteCardModal;
