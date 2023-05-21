import React from 'react';
import loginRegisterIcon from './loginRegisterIcon.svg';
import { StyledButton } from './LoginRegisterBtn.styled';

export const LoginRegisterBtn = ({ disabled, btnText }) => {
  return (
    <StyledButton type="submit" disabled={disabled}>
      <span> {btnText} </span>
      <img src={loginRegisterIcon} alt="->]"></img>
    </StyledButton>
  );
};
