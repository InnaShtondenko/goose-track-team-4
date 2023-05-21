import styled from "styled-components";

import { greaterThan } from "helpers/breakpoints.styled";

import {ReactComponent as MoonSVG} from './moon.svg';
import {ReactComponent as SunSVG} from './sun.svg';

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
        width: 24px;
        height: 24px;

        ${() => greaterThan("tablet", `
            width: 32px;
            height: 32px;
        `)};
    `
}

export const MoonSVGStyled = SVGStyled(MoonSVG);

export const SunSVGStyled = SVGStyled(SunSVG);