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
          <GetStartedForm closeModal={ closeModal }/>
        </Modal>
      )}
    </>
  );
}

export default GetStartedModal;
