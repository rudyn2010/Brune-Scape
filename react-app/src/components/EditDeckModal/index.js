import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditDeckForm from './EditDeckForm';


function EditDeckModal({ deck }) {

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <div className='' onClick={() => setShowModal(true)}>
        <i className='cursor fa-solid fa-pen-to-square'></i>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <div className='login-modal-hdr'>
              <div
              className='x'
              onClick={() => setShowModal(false)}
              > X </div>
              <div className='header-lfm blue-text'>
                Edit Deck
              </div>
            </div>
            <EditDeckForm deck={ deck } closeModal={ closeModal }/>
        </Modal>
      )}
    </>
  );
}

export default EditDeckModal;
