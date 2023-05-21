import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const PeriodPaginationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: space-between;

  ${greaterThan(
    'tablet',
    `
   gap: 8px;
`
  )}
`;
export const DateField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 152px;
  height: 30px;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};

  border-radius: ${p => p.theme.radii.light};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.29;

  ${greaterThan(
    'tablet',
    `
   height: 34px;
   font-size: 16px;
   width: 180px;
`
  )}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const StyledLink = styled(Link)`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 36px;

  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.taskBorderTheme}`};
  font-size: ${p => p.theme.fontSizes.l};
  background-color: ${p => p.theme.colors.bgcSecondaryTheme};
  cursor: pointer;

  &:first-of-type {
    border-radius: 8px 0px 0px 8px;
  }
  &:nth-of-type(2) {
    border-radius: 0px 8px 8px 0px;
    border-left: none;
  }
  &:nth-of-type(2):hover {
    border-left: ${p =>
      `${p.theme.borders.normal} ${p.theme.colors.taskBorderTheme}`};
  }
  &:hover {
    box-shadow: ${props => props.theme.shadows.loginBtn};
    scale: 1.05;
  }

  ${greaterThan(
    'tablet',
    `
   height: 34px;
`
  )}
  // disabled styles
   ${p => p.disabled && `pointer-events: none; opacity: 0.5;`}
`;
export const StyledHiChevronLeft = styled(HiChevronLeft)`
  color: ${p => p.theme.colors.calendarDayNumbers};
`;
export const StyledHiChevronRight = styled(HiChevronRight)`
  color: ${p => p.theme.colors.calendarDayNumbers};
`;

export const StyledLinkToday = styled(Link)`
  margin-left: 8px;
  width: 72px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;

  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  border-radius: 8px;

  color: ${p => p.theme.colors.calendarDayNumbers};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.taskBorderTheme}`};
  background-color: ${p => p.theme.colors.bgcSecondaryTheme};
  cursor: pointer;

  &:hover {
    box-shadow: ${props => props.theme.shadows.loginBtn};
    scale: 1.07;
  }

  ${greaterThan(
    'tablet',
    `
   height: 34px;
  font-size: 16px;
`
  )}
`;
