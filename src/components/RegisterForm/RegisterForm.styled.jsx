import styled from 'styled-components';
import { Field, Form } from 'formik';

import inputValidIcon from './SVG/inputValidIcon.svg';
import inputInvalidIcon from './SVG/inputInvalidIcon.svg';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${p => p.theme.space[8]}px ${p => p.theme.space[6]}px;

  border-radius: ${props => props.theme.radii.light};
  background-color: ${props => props.theme.colors.white};

  font-family: ${props => props.theme.fonts.main};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 480px;
  }
`;

export const FormHeader = styled.h2`
  margin-bottom: ${p => p.theme.space[7]}px;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.l};

  text-shadow: ${props => props.theme.shadows.headerText};

  color: ${props => props.theme.colors.primary};
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: ${p => p.theme.space[6]}px;
  color: ${props => props.theme.colors.black};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 90%;
  }
`;

export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.xs};

  &[aria-invalid='true'] {
    color: ${props => props.theme.colors.invalid};
  }

  &[data-valid='true'] {
    color: ${props => props.theme.colors.valid};
  }
`;

export const StyledField = styled(Field)`
  margin-top: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px;

  border: ${props => props.theme.borders.input};
  border-radius: ${props => props.theme.radii.light};
  outline: none;

  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.m};

  background-color: ${props => props.theme.colors.white};

  border: ${props => props.theme.borders.formField};

  &:focus,
  &:hover,
  &:active {
    border: ${props => props.theme.borders.activeField};
  }

  &[aria-invalid='true'] {
    border: ${props => props.theme.borders.invalidField};

    background: url(${inputInvalidIcon});
    background-repeat: no-repeat;
    background-position: calc(100% - 13px) center;
  }

  &[data-valid='true'] {
    border: ${props => props.theme.borders.validField};

    background: url(${inputValidIcon});
    background-repeat: no-repeat;
    background-position: calc(100% - 13px) center;
  }
`;

export const ErrorMsgContainer = styled.div`
  position: absolute;
  bottom: -22%;
  right: 0;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  color: ${props => props.theme.colors.invalid};
`;
