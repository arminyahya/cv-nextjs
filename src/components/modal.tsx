"use client"
import React, { DOMElement, useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }: any) => {
  return isOpen ? ReactDOM.createPortal(
    <div className="absolute top-0 right-0 w-full h-screen bg-black flex items-center">
      <div className="rounded shadow w-full min-h-min">
        {React.cloneElement(children, {onClose})}
      </div>
    </div>
  , document.querySelector('#portal-modal') as Element) : null;
}

export default Modal;