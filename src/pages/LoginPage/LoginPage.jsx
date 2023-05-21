import { LoginForm } from '../../components/LoginForm/LoginForm';

import {
  PageContainer,
  BackdropContainer,
  PositionContainer,
  NavLinkStyled,
  PositionImgContainer,
  GooseContainer,
  Goose,
  Speak,
  TextContainer,
  AccentText,
} from './LoginPage.styled';

const LoginPage = () => {
  return (
    <>
      <PageContainer>
        <BackdropContainer>
          <PositionContainer>
            <LoginForm />

            <NavLinkStyled to="/register" end>
              Sign Up
            </NavLinkStyled>
          </PositionContainer>

          <PositionImgContainer>
            <GooseContainer>
              <Goose />
              <Speak>
                <TextContainer>
                  <span>
                    Quickly <AccentText>come in </AccentText>and <br />
                    write down your <br /> tasks for the day!
                  </span>
                </TextContainer>
              </Speak>
            </GooseContainer>
          </PositionImgContainer>
        </BackdropContainer>
      </PageContainer>
    </>
  );
};

export default LoginPage;
