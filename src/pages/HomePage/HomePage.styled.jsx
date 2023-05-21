
import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';
export const Container = styled.div`
  padding: 64px 20px;

  ${props =>
    greaterThan(
      'tablet',
      `
      padding: 64px 32px;
      `
    )}

  ${props =>
    greaterThan(
      'laptop',
      `
          padding: 64px 128px;
          `
    )}
`;

