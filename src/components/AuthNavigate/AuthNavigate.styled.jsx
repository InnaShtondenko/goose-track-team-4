import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { greaterThan, lesserThan } from 'helpers/breakpoints.styled';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  ${props =>
    greaterThan(
      'tablet',
      `
      justify-content: center;
      `
    )}

  height: 100vh;

  background-color: ${p => p.theme.colors.btnLogout};
`;

export const GooseTitle = styled.h1`
  font-family: 'Coolvetica';
  font-style: italic;
  font-weight: 400;
  font-size: 44px;
  line-height: 48px;

  margin-bottom: 32px;
  ${props =>
    greaterThan(
      'tablet',
      `
      margin-bottom: 40px;

      font-size: 120px;
      line-height: 150px;
      `
    )}

  color: #ffffff;

  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const GooseImg = styled.img`
  width: 142px;
  height: 142px;

  ${props =>
    greaterThan(
      'tablet',
      `
      width: 150px;
      height: 150px;
      `
    )}
`;

export const LinkContainer = styled.div`
  display: flex;

  ${props =>
    lesserThan(
      'tablet',
      `
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: center;

      max-height: 50vh;

      margin-bottom: 20px;
     `
    )}

  ${props =>
    greaterThan(
      'tablet',
      `
      justify-content: center;
      `
    )}
`;

export const NavLinkStyledRegister = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  padding: 3px 5px 1px;
  border-radius: 10px;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.xs};

  color: ${props => props.theme.colors.white};
  text-decoration: underline;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  ${props =>
    lesserThan(
      'tablet',
      `
        margin-top: 208px;
       `
    )}
  ${props =>
    greaterThan(
      'tablet',
      `
      font-size: ${props.theme.fontSizes.s};
       `
    )}

    transition: box-shadow 250ms linear;

  &:hover,
  &:focus {
    box-shadow: 4px 4px 16px rgba(255, 255, 255, 0.7);
  }
`;
export const NavLinkStyledLogin = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 131px;

  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[7] + 1}px;

  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.normal};

  background-color: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.loginBtn};

  cursor: pointer;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.s};

  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.btnLogout};

  img {
    margin-left: ${props => props.theme.space[3]}px;
    fill: ${props => props.theme.colors.btnLogout};
  }

  ${p => greaterThan('tablet', `margin-left: ${p.theme.space[6]}px;`)}

  transition: box-shadow 250ms linear;

  &:hover,
  &:focus {
    box-shadow: 4px 4px 16px rgba(255, 255, 255, 0.7);
  }
`;
