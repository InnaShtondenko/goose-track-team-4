import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';

export const SkeletonColumnsListWrapper = styled.div`
    width: 336px;
    min-height: 446px;
  ${greaterThan(
    'tablet',
    `
   width: 704px;
   min-height: 512px;
`
)}
  ${greaterThan(
    'laptop',
    `
  width: 1087px;
 min-height: 533px;
`
)}
`;

export const SkeletonColumnsList = styled.div`
display: flex;
  gap: 22px;
  margin-bottom: ${p => p.theme.space[4]}px;
  width: fit-content;
  ${greaterThan(
    'tablet',
    `
   gap: 16px;
`
)}
  ${greaterThan(
    'laptop',
    `
  gap: 27px;
`
)};
`;

export const SkeletonColumn = styled.div`
    display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 6px 20px 18px;
  overflow: hidden;

  min-height: 155px;
  max-height: 432px;
  height: fit-content;
  width: 336px;

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
   min-height: 165px;
   max-height: 498px;
   width: 344px;
   padding: 27px 8px 20px 20px;
`
  )}
`;
