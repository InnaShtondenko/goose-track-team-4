import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';

export const CalendarToolbarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 18px;

  ${greaterThan(
    'tablet',
    `
  flex-direction: row;
  justify-content: space-between;
`
  )}
`;
