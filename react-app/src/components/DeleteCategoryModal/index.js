import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import { deleteACategory } from '../../store/category';


function DeleteCategoryModal({ category }) {

    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const deleteCategory = (e) => {
        e.preventDefault();

        closeModal();

        dispatch(deleteACategory(category.id))
    }

    const closeModal = () => {
    setShowModal(false);
    }

    return (
    <>
        <div className='' onClick={() => setShowModal(true)}>
            <i className='cursor fa-solid fa-trash'></i>
        </div>
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
                <button className="login-button" onClick={deleteCategory}>
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

export default DeleteCategoryModal;
