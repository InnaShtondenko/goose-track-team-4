
import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: 500;
  font-size: 14px;
  color: rgba(17, 17, 17, 0.9);

  li:nth-child(2n) div {
    ${props =>
      greaterThan(
        'tablet',
        `
            margin-left:auto;
        `
      )}
    ${props =>
      greaterThan(
        'laptop',
        `
        // margin-left:228px;
        // margin-right:0;

        `
      )}
  }

  li:nth-child(2n) {
    ${props =>
      greaterThan(
        'laptop',
        `
          flex-direction: row-reverse;
          margin-left:77px;
          margin-right:0;
          `
      )}
  }
`;
export const ListItem = styled.li`
  margin-bottom: 64px;

  ${props =>
    greaterThan(
      'laptop',
      `
      width: 1107px;
      display:flex;
      justify-content: space-between;
        align-items: center;

        margin-left:0;
          margin-right:77px;
      `
    )}
`;
export const ListDescriptionHolder = styled.div`
  ${props =>
    greaterThan(
      'tablet',
      `
        width: 275px
      `
    )}

  ${props =>
    greaterThan(
      'laptop',
      `
        // margin-right:228px;
        `
    )}
`;
export const ListNumber = styled.h3`
  margin-bottom: 14px;

  font-weight: 700;
  font-size: 80px;
  line-height: 80px;
  letter-spacing: -4px;
  color: #3e85f3;

  ${props =>
    greaterThan(
      'tablet',
      `
        font-size: 104px;
        line-height: 104px;
      `
    )}
`;
export const ListEmphasize = styled.p`
  display: inline-block;

  margin-bottom: 8px;
  padding: 8px 18px;

  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;

  color: #3e85f3;
  background-color: #dcebf7;
  border-radius: 44px;

  ${props =>
    greaterThan(
      'tablet',
      `
        font-size: 40px;
        line-height: 44px;
        padding: 6px 18px;
      `
    )}
`;
export const ListText = styled.p`
  margin-bottom: 14px;

  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  text-transform: uppercase;

  color: #171820;

  ${props =>
    greaterThan(
      'tablet',
      `
        margin-bottom: 24px;

        font-size: 40px;
        line-height: 44px;
      `
    )}
`;
export const ListDescription = styled.p`
  margin-bottom: 40px;
  ${props =>
    greaterThan(
      'tablet',
      `
        margin-bottom: 48px;
      `
    )}
`;
export const ListImg = styled.img`
  ${props =>
    greaterThan(
      'laptop',
      `
      max-width:604px
      `
    )}
`;

