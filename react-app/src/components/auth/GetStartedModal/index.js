import React, { useState } from 'react';
// import { Modal } from '../../context/Modal';
// import LoginForm from './LoginForm';

import { Modal } from '../../../context/Modal'
import GetStartedForm from './GetStartedForm';
import './GetStartedModal.css';


function GetStartedModal() {

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <button className='signup-form-btn' onClick={() => setShowModal(true)}>Get Started</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className='login-modal-hdr'>
            <div
            className='x'
            onClick={() => setShowModal(false)}
            > X </div>
            <div className='header-lfm blue-text'>
              Get Started
            </div>
          </div>
          <GetStartedForm closeModal={ closeModal }/>
        </Modal>
      )}
    </>
  );
}

export default GetStartedModal;
