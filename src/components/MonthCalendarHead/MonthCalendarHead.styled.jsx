import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';

export const DaysNamesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[4 + 1]}px;

  min-height: 50px;
  max-width: 336px;

  border-radius: ${p => p.theme.radii.light};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.taskBorderTheme}`};

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: 1.12;

  background-color: ${p => p.theme.colors.bgcSecondaryTheme};
  color: ${p => p.theme.colors.calendarDayNameAtMonth};

  ${greaterThan(
    'tablet',
    `
   min-height: 46px;
   max-width: 704px;
`
  )}
  ${greaterThan(
    'laptop',
    `
  max-width: 1087px;
`
  )}
`;

export const DayNameWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;

  color: ${p => (p.isWeekend ? p.theme.colors.primary : 'inherit')};
`;

export const DayName = styled.span`
  display: none;

  ${greaterThan('tablet', `display: block;`)}
`;

export const MobileDayName = styled.span`
  display: block;

  ${greaterThan('tablet', `display: none;`)}
`;
