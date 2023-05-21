import THEME_CONTEXT from 'context/ThemeContext';
import styled from 'styled-components';

import { ReactComponent as EditIcon } from './edit-icon.svg';
import { ReactComponent as DeleteIcon } from './delete-icon.svg';
import { ReactComponent as MoveIcon } from './move-icon.svg';

const Toolbar = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: start;

  gap: 10px;
`;

const Button = styled.button`
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  border-width: 0;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;

const ContextMenu = styled.div`
  position: absolute;
  z-index: 50;
  top: -120%;
  left: -60%;

  width: 115px;
  max-height: 80px;
  /* height: fit-content; */
  overflow-y: auto;

  padding: 14px;

  background-color: ${({ theme }) =>
    theme === THEME_CONTEXT.LIGHT ? '#ffffff' : '#171820'};
  color: ${({ theme }) =>
    theme === THEME_CONTEXT.LIGHT ? '#616161' : '#ffffff'};

  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);

  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};

  @media (min-width: 768px) {
    top: -200%;
    left: -100%;

    padding: 20px 24px;

    width: 150px;
    /* height: fit-content; */
  }
`;

const ContextMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;

  cursor: pointer;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 8px;
    }
  }

  &:not(:last-child) {
    margin-bottom: 14px;
  }

  &:hover {
    background-color: transparent;
    color: #3e85f3;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    span svg path {
      stroke: #3e85f3;
      transition: stroke 0.2s ease-in-out;
    }
  }

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const MoveTaskIcon = styled(({ ...props }) => (
  <span>
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginLeft: '8px' }}
      {...props}
    >
      <g clipPath="url(#clip0_124_1579)">
        <path
          d="M1.94727 4.08332C2.95588 2.33974 4.84105 1.16666 7.0002 1.16666C10.2219 1.16666 12.8335 3.77833 12.8335 6.99999C12.8335 10.2217 10.2219 12.8333 7.0002 12.8333C4.84105 12.8333 2.95588 11.6602 1.94727 9.91666"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 9.33332L9.33333 6.99999L7 4.66666"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.16699 7L9.33366 7"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_124_1579">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </span>
))`
  color: ${({ theme }) =>
    theme === THEME_CONTEXT.LIGHT ? '#616161' : '#ffffff'};

  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

const IconWrapper = styled.div`
  width: 14px;
  height: 14px;

  color: ${({ theme, open }) =>
    open ? '#3e85f3' : theme === THEME_CONTEXT.LIGHT ? '#111111' : '#ffffff'};

  &:hover {
    svg path {
      stroke: #3e85f3;
      transition: stroke 0.2s ease-in-out;
    }
  }

  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

const EditTaskIcon = ({ theme }) => {
  return (
    <IconWrapper theme={theme}>
      <EditIcon />
    </IconWrapper>
  );
};

const DeleteTaskIcon = ({ theme }) => {
  return (
    <IconWrapper theme={theme}>
      <DeleteIcon />
    </IconWrapper>
  );
};

const MoveTaskIconBase = ({ theme, open }) => {
  return (
    <IconWrapper theme={theme} open={open}>
      <MoveIcon />
    </IconWrapper>
  );
};

export {
  Toolbar,
  Button,
  ContextMenu,
  ContextMenuItem,
  MoveTaskIcon,
  EditTaskIcon,
  DeleteTaskIcon,
  MoveTaskIconBase,
};
