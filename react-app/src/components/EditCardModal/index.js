import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditCardForm from './EditCardForm';


function EditCardModal({ card }) {

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <div className='' onClick={() => setShowModal(true)}> E </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <div className='login-modal-hdr'>
              <div
              className='x'
              onClick={() => setShowModal(false)}
              > X </div>
              <div className='header-lfm blue-text'>
                Edit a Card
              </div>
            </div>
            <EditCardForm card={ card } closeModal={ closeModal } />
        </Modal>
      )}
    </>
  );
}

export default EditCardModal;
