import styled from 'styled-components';
import THEME_CONTEXT from 'context/ThemeContext';

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  display: block;
  padding: 12px 14px;

  background-color: ${({ theme }) =>
    theme === THEME_CONTEXT.LIGHT ? '#F7F7F7' : 'transparent'};
  color: ${({ theme }) =>
    theme === THEME_CONTEXT.LIGHT ? '#616161' : '#FFFFFF'};
  border-radius: 8px;
  border-width: 0;
  border: ${({ theme }) =>
    theme === THEME_CONTEXT.LIGHT
      ? 'none'
      : '1px solid rgba(255, 255, 255, 0.15)'};

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  ::placeholder {
    opacity: 1;
  }
  box-sizing: 'border-box';
`;

const ErrorMessage = styled.div`
  bottom: -1.5rem;
  left: 0;
  color: red;
  font-size: 0.8rem;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-top: 12px;
  padding-bottom: 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${props => (props.primary ? '#3E85F3' : '#EFEFEF')};
  color: ${props => (props.primary ? '#ffffff' : '#111111')};

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  svg {
    margin-right: 8px;
  }

  @media (min-width: 768px) {
    padding-top: 14px;
    padding-bottom: 14px;
  }
`;

export {
  Form,
  Input,
  ErrorMessage,
  TitleContainer,
  ButtonContainer,
  Button,
};
