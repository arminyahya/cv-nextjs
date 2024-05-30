import CloseIcon from '@/Icons/close';
import React, { DOMElement, useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }: any) => {
  return isOpen ? ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {React.cloneElement(children, {onClose})}
      </div>
    </div>
  , document.querySelector('#portal-modal') as Element) : null;
}

export default Modal;