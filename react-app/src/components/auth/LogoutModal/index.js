import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/session';
import { Modal } from '../../../context/Modal';


function LogoutModal() {

    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const onLogout = async (e) => {
        await dispatch(logout());
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
    <>
        <div className='modal-div-nb'>
            <div className='login-modal-btn' onClick={() => setShowModal(true)}>
                Log Out
            </div>
        </div>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <div className='login-modal-hdr'>
                <div
                className='x'
                onClick={() => setShowModal(false)}
                > X </div>
                <div className='header-lfm blue-text'>
                Are You Sure?
                </div>
            </div>
            <div className='login-form-buttons'>
                <button className="login-button" onClick={onLogout}>
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

export default LogoutModal;
