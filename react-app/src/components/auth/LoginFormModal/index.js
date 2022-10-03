import React, { useState } from 'react';
// import { Modal } from '../../context/Modal';
// import LoginForm from './LoginForm';

import { Modal } from '../../../context/Modal'
import NewLoginForm from './NewLoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewLoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
