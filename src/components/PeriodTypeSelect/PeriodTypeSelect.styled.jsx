import { greaterThan } from 'helpers/breakpoints.styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PeriodSelectorWrapper = styled.div`
  display: flex;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const StyledLink = styled(Link)`
  padding: ${p => p.theme.space[0]}px;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 34px;
  width: 76px;

  border: none;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.29;

  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.bgDayMonthSelector};

  ${p =>
    p.isdaypage === 'true' &&
    `color: ${p.theme.colors.textActiveDayMonthSelector}; background-color: ${p.theme.colors.bgActiveBtnDayMonthSelector};`}
  cursor: pointer;

  &:first-of-type {
    border-right: ${p =>
      `${p.theme.borders.normal} ${p.theme.colors.borderDayMonthSelector}`};
    border-radius: 8px 0px 0px 8px;
  }
  &:last-of-type {
    border-radius: 0px 8px 8px 0px;
  }
  &:last-of-type:hover {
    border-left: ${p =>
      `${p.theme.borders.normal} ${p.theme.colors.borderDayMonthSelector}`};
  }
  &:hover {
    box-shadow: ${props => props.theme.shadows.loginBtn};
    scale: 1.07;
  }

  ${greaterThan(
    'tablet',
    `
  font-size: 16px;
`
  )}
`;
