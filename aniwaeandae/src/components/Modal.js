// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // 모달에 대한 CSS 스타일을 가져옵니다.

const Modal = ({ isOpen, onClose, children }) => {
 if (!isOpen) return null;

 return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
 );
};

export default Modal;
