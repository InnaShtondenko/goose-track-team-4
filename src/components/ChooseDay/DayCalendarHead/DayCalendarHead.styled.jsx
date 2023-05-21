import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';
import { Link } from 'react-router-dom';

export const DaysWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[4]}px;

  min-height: 74px;
  max-width: 336px;

  border-radius: ${p => p.theme.radii.light};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.taskBorderTheme}`};

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: 1.12;

  background-color: ${p => p.theme.colors.bgcSecondaryTheme};
  color: ${p => p.theme.colors.textDaysNameAtDaysPage};

  ${greaterThan(
    'tablet',
    `
   min-height: 68px;
   max-width: 704px;
   font-size: 14px;
`
  )}
  ${greaterThan(
    'laptop',
    `
  max-width: 1087px;
`
  )}
`;

export const DayNameAndNumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const DayName = styled.span`
  display: none;

  ${greaterThan(
    'tablet',
    `
   display: block;
   gap:8px;
`
  )}
`;

export const MobileDayName = styled.span`
  display: block;

  ${greaterThan('tablet', `display: none;`)}
`;

export const DayNumber = styled(Link)`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 22px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1;

  border-radius: 6px;
  border: none;
  color: ${p =>
    p.iscurrentday === 'true'
      ? p.theme.colors.white
      : p.theme.colors.calendarDayNumbers};

  background-color: ${p =>
    p.iscurrentday === 'true'
      ? p.theme.colors.primary
      : p.theme.colors.bgcSecondaryTheme};

  &:hover {
    outline: ${p => `${p.theme.borders.medium} ${p.theme.colors.primary}`};
    box-shadow: ${props => props.theme.shadows.loginBtn};
  }

  ${p =>
    p.isselectedday === 'true' &&
    `outline: ${p.theme.borders.normal} ${p.theme.colors.primary}`};

  ${greaterThan(
    'tablet',
    `
  width: 26px;
  height: 26px;
  font-size: 16px;
  border-radius: 8px;
`
  )}
`;
