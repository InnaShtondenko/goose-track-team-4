import { greaterThan } from 'helpers/breakpoints.styled';
import styled from 'styled-components';

export const TasksListContainer = styled.div`
  margin-top: 14px;

  max-height: 65vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 6px;

  ${greaterThan(
    'tablet',
    `
    padding-right: 7px;
    `
  )}

  /* scrollbar width and height */
  ::-webkit-scrollbar {
    width: 6px;

    ${greaterThan(
      'tablet',
      `
    width: 8px;
    `
    )}
  }

  /* background of the scrollbar*/
  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.scrollbarBgc};
  }

  /* the part of the scrollbar that's draggable */
  ::-webkit-scrollbar-thumb {
    width: 6px;
    height: 112px;

    border-radius: ${props => props.theme.radii.medium};
    background-color: ${props => props.theme.colors.scrollbarThumb};

    ${greaterThan(
      'tablet',
      `
      width: 8px;
      `
    )}
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #888;
  }
`;
