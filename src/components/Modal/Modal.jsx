import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { selectTheme } from 'redux/auth/auth.selectors';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import { ModalWrapper, ModalContainer, CloseButton } from './Modal.styled';

const Modal = ({ children, onClose, isModalOpen }) => {
  const modalRoot = document.getElementById('modal-root');
  const currentTheme = useSelector(selectTheme);

  const handleClickOutside = event => {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isModalOpen) {
      return clearAllBodyScrollLocks();
    }
    disableBodyScroll(document.body, { reserveScrollBarGap: true });
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose, isModalOpen]);

  const modalContent = (
    <ModalWrapper
      onClick={event => handleClickOutside(event)}
      isModalOpen={isModalOpen}
    >
      <ModalContainer theme={currentTheme}>
        <CloseButton onClick={onClose} theme={currentTheme}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 5L5 15"
              stroke="#111111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 5L15 15"
              stroke="#111111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CloseButton>
        {children}
      </ModalContainer>
    </ModalWrapper>
  );

  return createPortal(modalContent, modalRoot);
};

export default Modal;
