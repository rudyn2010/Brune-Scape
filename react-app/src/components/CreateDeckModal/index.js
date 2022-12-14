import React, { useState } from 'react';
import CreateDeckForm from './CreateDeckForm';
import { Modal } from '../../context/Modal';


function CreateDeckModal() {

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
                New Deck
              </div>
            </div>
            <CreateDeckForm closeModal={ closeModal }/>
        </Modal>
      )}
    </>
  );
}

export default CreateDeckModal;
