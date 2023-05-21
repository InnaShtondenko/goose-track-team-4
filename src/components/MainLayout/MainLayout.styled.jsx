import styled from 'styled-components';

import { greaterThan } from 'helpers/breakpoints.styled';

export const StyledMain = styled.div`
  background-color: ${prop => prop.theme.colors.bgcMainTheme};
  min-height: 100vh;
`;

export const WrapperMain = styled.div`
  ${() =>
    greaterThan(
      'laptop',
      `
    display: flex;
    flex-direction: row;
    // justify-content: center;
  `
    )};
`;

export const WrapperSideBarContent = styled.div`
  width: 289px;

  ${({ theme }) =>
    greaterThan(
      'laptop',
      `
    display: flex;
    justify-content: end;
    
    min-width: 289px;
    width: calc((100vw - 1440px) / 2 + 289px);
    background: ${theme.colors.bgcSideBarTheme};
  `
    )};
`;

export const WrapperMainContent = styled.div``;
