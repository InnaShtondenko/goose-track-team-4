import { greaterThan } from 'helpers/breakpoints.styled';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
  max-width: 336px;
  padding: 0 0 52px;

  font: inherit;

  ${greaterThan(
    'tablet',
    `
    max-width: 704px;
    padding 0 0 42px;
    gap: 32x;
`
  )}

  ${greaterThan(
    'laptop',
    `
    width: 1151px;
    max-width: 1151px;
    padding 0 32px 32px;
`
  )}
`;
