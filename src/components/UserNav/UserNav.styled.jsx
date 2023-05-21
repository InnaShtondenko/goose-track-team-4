import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { greaterThan } from "helpers/breakpoints.styled";

import {ReactComponent as UserSVG} from './user.svg';
import {ReactComponent as CalendarSVG} from './calendar.svg';

export const WrapperStyled = styled.div`
    font-size: ${props => props.theme.fontSizes.xs};
    line-height: 1.25;
    color: ${props => props.theme.colors.userNavTheme};

    ${props => greaterThan("tablet", `
        font-size: ${props.theme.fontSizes.s};
    `)};
`;

export const UlStyled = styled.ul`
    padding-top: 24px;

    ${() => greaterThan("tablet", `
        padding-top: 32px;
    `)};
`;

export const LiStyled = styled.li`
    &:not(:last-child) {
        margin-bottom: 18px;
    };
`;

export const NavLinkStyled = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 10px 12px;
    border-radius: 8px;
    
    color: ${props => props.theme.colors.userNavLinkActiveTheme};
    font-size: ${props => props.theme.fontSizes.s};
        
    &:hover,
    &:focus {
        color: tomato;
    }
    
    &.active {
        color: ${props => props.theme.colors.userNavLinkTheme};
        background: ${props => props.theme.colors.userNavLinkBcgTheme};
        pointer-events: none;
    }

    ${props => greaterThan("tablet", `
        padding: 16px 20px;
        gap: 10px;
        font-size: ${props.theme.fontSizes.m};
    `)};
`;

export const ButtonStyled = styled.button`
    background-color: transparent;
    border: 0;
    padding: 4px;

    cursor: pointer;

    &:hover,
    &:focus {
        box-shadow: ${props => props.theme.shadows.loginBtn};
        border-radius: 50%;
    };
`

const SVGStyled = imageSVG => {
    return styled(imageSVG)`
        display: block;
        width: 20px;
        height: 20px;

        ${() => greaterThan("tablet", `
            width: 24px;
            height: 24px;
        `)};
    `
}

export const UserSVGStyled = SVGStyled(UserSVG);

export const CalendarSVGStyled = SVGStyled(CalendarSVG);