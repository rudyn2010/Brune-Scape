import React, { useState } from 'react';
// import { Modal } from '../../context/Modal';
// import LoginForm from './LoginForm';

import { Modal } from '../../../context/Modal'
import NewLoginForm from './NewLoginForm';
import './LoginFormModal.css'

function LoginFormModal() {

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  }


  return (
    <>
      <button className='login-modal-btn' onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className='login-modal-hdr'>
            <div
            className='x'
            onClick={() => setShowModal(false)}
            > X </div>
            <div className='header-lfm blue-text'>
              Log In
            </div>
          </div>
          <NewLoginForm closeModal={ closeModal }/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
