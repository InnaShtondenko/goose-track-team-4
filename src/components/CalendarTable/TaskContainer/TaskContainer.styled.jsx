import { greaterThan } from 'helpers/breakpoints.styled';
import styled from 'styled-components';

const getTasksColor = p => {
  const c = p.theme.colors;
  switch (p.priority) {
    case 'low':
      return `color: ${c.primary}; background-color: ${c.taskSecondaryLow};`;
    case 'medium':
      return `color: ${c.taskMainMedium}; background-color: ${c.taskSecondaryMedium};`;
    case 'high':
      return `color: ${c.taskMainHigh}; background-color: ${c.taskSecondaryHigh};`;
    default:
      return `color: ${c.black}; background-color: ${c.secondary};`;
  }
};

export const StyledTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StyledTask = styled.button`
  padding: 0 4px 0 8px;
  width: 100%;
  height: 22px;
  line-height: 1;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 8px;
  border: none;
  ${p => getTasksColor(p)};
  cursor: pointer;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xxs};

  ${greaterThan(
    'tablet',
    `
  padding: 0 10px 0 12px;
  height: 26px;
  font-size: 14px;
`
  )}

  ${greaterThan(
    'laptop',
    `
  padding: 0 12px 0 12px;
`
  )}
`;
