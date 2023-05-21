import styled from 'styled-components';
// import { greaterThan } from 'helpers/breakpoints.styled';
// import { Link } from 'react-router-dom';
import { ReactComponent as RoundBtnIcon } from './RoundBtnIcon.svg';
import { greaterThan } from 'helpers/breakpoints.styled';


export const ColumnHeadBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 12px;
  ${greaterThan(
    'tablet',
    `
   margin-right: 15px;
`
  )}
`;
 
export const ColumnHeadBarTitle = styled.h2`
  color: ${p => p.theme.colors.textHeaderTheme};
`;

export const StyledRoundButton = styled.button`
    border: 0;
    padding: 1px;
    background-color: transparent;
    cursor: pointer;
    display: block;
    &:hover,
    &:focus {
        box-shadow: ${p => p.theme.shadows.loginBtn};
        border-radius: 50%;
    };
`;

export const RoundBtnIconSvg = styled(RoundBtnIcon)`
  display: block;
  width: 22px;
  height: 22px;
  color: ${p => p.theme.colors.textHeaderTheme};

`;
