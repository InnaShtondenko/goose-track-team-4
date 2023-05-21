import styled from 'styled-components';
import THEME_CONTEXT from 'context/ThemeContext';

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  pointer-events: ${({ isModalOpen }) => (isModalOpen ? 'auto' : 'none')};
  visibility: ${({ isModalOpen }) => (isModalOpen ? 'visible' : 'hidden')};
  opacity: ${({ isModalOpen }) => (isModalOpen ? '1' : '0')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 100;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 303px;
  padding: 48px 18px 40px 18px;

  background-color: ${({ theme }) =>
    theme === THEME_CONTEXT.LIGHT ? '#ffffff' : '#171820'};
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 396px;
    padding: 40px 28px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;

  svg path {
    stroke: ${({ theme }) =>
      theme === THEME_CONTEXT.LIGHT ? '#111111' : '#ffffff'};
  }

  &:hover svg path {
    stroke: #616161;
    transition: stroke 0.3s ease;
  }
`;

export { ModalWrapper, ModalContainer, CloseButton };
