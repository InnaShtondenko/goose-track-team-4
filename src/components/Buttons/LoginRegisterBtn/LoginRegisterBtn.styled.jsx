import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: ${p => p.theme.space[7]}px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[4]}px;

  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.normal};

  background-color: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.loginBtn};

  cursor: pointer;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.s};

  color: ${props => props.theme.colors.white};

  &:disabled {
    background-color: ${props => props.theme.colors.taskMainLow};
  }

  img {
    margin-left: ${p => p.theme.space[4] - 1}px;
  }
`;
