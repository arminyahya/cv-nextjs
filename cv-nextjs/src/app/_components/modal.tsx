import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }: any) => {
  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">Close</button>
        {children}
      </div>
    </div>
  ) : null;
}

export default Modal;