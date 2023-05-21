import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[6] + 4}px;

  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.normal};

  background-color: ${props => props.theme.colors.btnLogoutNormal};
  box-shadow: ${props => props.theme.shadows.loginBtn};

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.s};
  cursor: pointer;
  color: ${props => props.theme.colors.white};

  img {
    margin-left: ${p => p.theme.space[3]}px;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.btnLogoutHover};
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${p => p.theme.space[5]}px ${p => p.theme.space[6]}px;

    img {
      margin-left: ${p => p.theme.space[4] + 1}px;
    }
  }
`;

export const StyledP = styled.p`
  display: flex;
  justify-content: center;

  padding: 40px;

  color: ${props => props.theme.colors.textHeaderTheme};
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  
  padding: 40px;
  margin: 0 auto;
`;