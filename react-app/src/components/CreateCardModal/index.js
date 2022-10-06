import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateCardForm from './CreateCardForm';


function CreateCardModal() {

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <div className='' onClick={() => setShowModal(true)}> + </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <div className='login-modal-hdr'>
              <div
              className='x'
              onClick={() => setShowModal(false)}
              > X </div>
              <div className='header-lfm blue-text'>
                New Card
              </div>
            </div>
            <CreateCardForm closeModal={ closeModal }/>
        </Modal>
      )}
    </>
  );
}

export default CreateCardModal;
