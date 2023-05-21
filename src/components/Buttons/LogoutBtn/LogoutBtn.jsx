import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import Modal from 'components/Modal/Modal';

import { logOut } from '../../../redux/auth/auth.operations';

import { StyledButton, ButtonsWrapper, StyledP } from './LogoutBtn.styled';
import logoutIcon from './logoutIcon.svg';
import { resetTasksState } from 'redux/tasks/tasks.slice';

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const ModalOpen = () => {
    setIsModalOpen(true);
  };

  const ModalClose = event => {
    setIsModalOpen(false);
  };

  const handleLogOut = async event => {
    try {
      await dispatch(logOut()).unwrap();
      dispatch(resetTasksState());
      // console.log('Logout successful');

      // navigate.push('/login');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <>
      <StyledButton type="submit" onClick={ModalOpen}>
        <span>Log Out </span>
        <img src={logoutIcon} alt="[->"></img>
      </StyledButton>
      <Modal onClose={ModalClose} isModalOpen={isModalOpen}>
        <StyledP>Are you sure you want to log out?</StyledP>
        <ButtonsWrapper>
          <StyledButton type="button" onClick={handleLogOut}>
            Yes
          </StyledButton>
          <StyledButton type="button" onClick={ModalClose}>
            No
          </StyledButton>
        </ButtonsWrapper>
      </Modal>
    </>
  );
};
