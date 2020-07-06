import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal(props) {

  const modal = typeof document !== 'undefined' ? document.getElementById('modal') : () => {};
  const { isOpen, onClose, children } = props;

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className='Modal center v-center'>
      <div className='Modal__container'>
        <button type='button' onClick={onClose} className='Modal__close--button btn-danger v-start right'>
          <i className='fas fa-times' />
        </button>

        <div className='Modal__body'>
          {children}
        </div>

      </div>
    </div>,
    modal,
  );
}
