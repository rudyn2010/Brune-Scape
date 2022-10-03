import React, { useState } from 'react';
// import { Modal } from '../../context/Modal';
// import LoginForm from './LoginForm';

import { Modal } from '../../../context/Modal'
import GetStartedForm from './GetStartedForm';


function GetStartedModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Get Started</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <GetStartedForm />
        </Modal>
      )}
    </>
  );
}

export default GetStartedModal;
