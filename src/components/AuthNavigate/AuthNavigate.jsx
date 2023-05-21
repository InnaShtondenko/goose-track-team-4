import loginRegisterIcon from './login.svg';
import goose from './home_goose.png';

import {
  NavLinkStyledRegister,
  NavLinkStyledLogin,
  LinkContainer,
  AuthContainer,
  GooseImg,
  GooseTitle,
} from './AuthNavigate.styled';

export const AuthNav = () => {
  return (
    <AuthContainer>
      <GooseImg src={goose} alt="hi-goose"></GooseImg>
      <GooseTitle>GooseTrack</GooseTitle>
      <LinkContainer>
        <NavLinkStyledRegister to="/register" end>
          Sign Up
        </NavLinkStyledRegister>
        <NavLinkStyledLogin to="/login" end>
          Log In
          <img src={loginRegisterIcon} alt="->]"></img>
        </NavLinkStyledLogin>
      </LinkContainer>
    </AuthContainer>
  );
};
