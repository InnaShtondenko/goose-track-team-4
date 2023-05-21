import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-weight: 700;

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ReviewContent = styled.div`
  ${props =>
    greaterThan(
      'tablet',
      `
      
        `
    )}
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  line-height: 32px;

  text-transform: uppercase;

  color: #3e85f3;

  ${props =>
    greaterThan(
      'tablet',
      `
        font-size: 40px;
        line-height: 44px;
        `
    )}
`;

export const AuthorName = styled.p`
  font-size: 18px;
  line-height: 18px;

  color: #343434;
`;

export const ReviewText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: rgba(17, 17, 17, 0.7);
`;
