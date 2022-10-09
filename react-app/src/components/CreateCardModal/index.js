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
      <div style={{cursor: "pointer"}} onClick={() => setShowModal(true)}>
        <i class="fa-solid fa-plus"></i>
      </div>
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
