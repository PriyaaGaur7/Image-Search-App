// Modal.js
import React from "react";
import ReactModal from "react-modal";

const Modal = ({ isOpen, closeModal, photo }) => {
  // Check if the photo object is null before accessing its properties
  if (!photo) {
    return null; // or handle the case where photo is null in a way that makes sense for your application
  }

  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal}>
      <img
        src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        alt={photo.title}
      />
    </ReactModal>
  );
};

export default Modal;
