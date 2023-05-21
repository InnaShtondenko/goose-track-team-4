import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { greaterThan } from "helpers/breakpoints.styled";
import { UserSVGStyled, CalendarSVGStyled } from 'components/UserNav/UserNav.styled';

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;

  display: fixed;
  top: 0;
  left: 0;
  
  width: 100%;
  height: 100%;
  
  background-color: transparent;
`;

export const ModalContainer = styled.div`
  min-width: 197px;

  position: absolute;
  top: 60px;
  ${props => `right: calc((100vw - ${props.theme.breakpoints.mobile}) / 2 + 20px);`}
  
  background-color: ${props => props.theme.colors.bgcSideBarTheme};
  box-shadow: ${props => props.theme.shadows.box};
  border-radius: 8px;

  transition: transform 0.5s ease;
  ${props => props.isShow
    ? 'transform: translate(0, 0) scale(1);'
    : 'transform: translate(50%, -50%) scale(0);'
  };

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 75px;
    ${props => `right: calc((100vw - ${props.theme.breakpoints.tablet}) / 2 + 32px);`}
  };

  @media screen and (min-width: ${props => props.theme.breakpoints.laptop}) {
    top: 90px;
    ${props => `right: calc((100vw - ${props.theme.breakpoints.laptop}) / 2 + 32px);`}
  };
`;

export const HeadModal = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 14px;

  padding: 14px 18px 18px 18px;
`;

export const UserAvatarModal = styled.div`
  box-sizing: border-box;

  width: 44px;
  height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.textHeaderTheme};
  border: 1.8px solid #3E85F3;
  padding: 0;

  border-radius: 50%;
  overflow: hidden;
`;

export const UserName = styled.p`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 1;

  color: ${props => props.theme.colors.textHeaderTheme};
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 8px 18px;

  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.22;

  color: ${props => props.theme.colors.userNavLinkActiveTheme};

  pointer-events: auto;
      
  &:hover,
  &:focus {
      color: tomato;
  };
  
  &.active {
      color: ${props => props.theme.colors.userNavLinkTheme};
      background: ${props => props.theme.colors.userNavLinkBcgTheme};
      pointer-events: none;
  };

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 0;

    position: absolute;
    left: 0;

    border: ${props => props.theme.colors.userNavModalBorderTheme};
  };

  &::before {
    top: 0;
  };

  &::after {
    bottom: 0;
  };
`;

const SVGStyled = imageSVG => {
  return styled(imageSVG)`
    ${() => greaterThan("tablet", `
      width: 20px;
      height: 20px;
    `)};
  `;
}

export const UserSVG = SVGStyled(UserSVGStyled);

export const CalendarSVG = SVGStyled(CalendarSVGStyled);

export const LogOutContainer = styled.div`
  padding-top: 32px;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 14px;

  ${props => greaterThan("tablet", `
    padding-top: 40px;
  `)};
`;