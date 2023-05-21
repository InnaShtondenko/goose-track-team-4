import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
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
} from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <>
      <PageContainer>
        <BackdropContainer>
          <PositionContainer>
            <RegisterForm />

            <NavLinkStyled to="/login" end>
              Log In
            </NavLinkStyled>
          </PositionContainer>

          <PositionImgContainer>
            <GooseContainer>
              <Goose />
              <Speak>
                <TextContainer>
                  <span>Quickly </span>
                  <AccentText>register </ AccentText>
                  <span>
                    {' '}
                    and <br /> familiarize yourself <br /> with the application!
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

export default RegisterPage;
