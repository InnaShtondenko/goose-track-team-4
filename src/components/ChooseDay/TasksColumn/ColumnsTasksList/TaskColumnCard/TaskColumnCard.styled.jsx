import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 108px;

  margin-bottom: ${p => p.theme.space[4]}px;

  padding-top: 14px;
  padding-bottom: 18px;
  padding-left: 15px;
  padding-right: 12px;

  border: ${props => props.theme.borders.container};
  border-radius: ${props => props.theme.radii.light};

  background-color: ${props => props.theme.colors.bgcMainTheme};

  cursor: pointer;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(0.98);
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const TaskTitle = styled.div`
  height: 16px;
  cursor: pointer;
  color: ${props => props.theme.colors.taskTitle};
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: end;
`;

export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;

  border: ${props => props.theme.borders.avatarTaskCard};
  border-radius: ${props => props.theme.radii.round};
`;

const PriorityIndicator = styled.div`
  display: flex;
  align-items: center;

  height: 20px;
  margin-left: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4] - 2}px;

  border-radius: ${props => props.theme.radii.small};

  color: ${props => props.theme.colors.bgcMainTheme};

  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.xxs};
  cursor: default;

  text-transform: capitalize;
`;

export const LowPriority = styled(PriorityIndicator)`
  background-color: ${props => props.theme.colors.taskMainLow};
`;

export const MediumPriority = styled(PriorityIndicator)`
  background-color: ${props => props.theme.colors.taskMainMedium};
`;

export const HighPriority = styled(PriorityIndicator)`
  background-color: ${props => props.theme.colors.taskMainHigh};
`;

export const ToolbarContainer = styled.div``;
