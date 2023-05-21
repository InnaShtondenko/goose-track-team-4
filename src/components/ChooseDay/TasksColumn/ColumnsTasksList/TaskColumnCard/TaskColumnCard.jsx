import React, { useState } from 'react';
import TaskToolbar from 'components/TaskToolbar/TaskToolbar';
import {
  CardContainer,
  StatsContainer,
  TaskTitle,
  ImageContainer,
  UserAvatar,
  LowPriority,
  MediumPriority,
  HighPriority,
  ToolbarContainer,
} from './TaskColumnCard.styled';
import userAvatarDefault from './user.jpg';
import { useAuth } from 'hooks';
import TaskModal from 'components/TaskModal/TaskModal';

export const TaskColumnCard = ({ task, sortedColumnList, setDraggedTask }) => {
  const { user } = useAuth();
  const { title, priority } = task;
  const userAvatar = user.avatarURL ? user.avatarURL : userAvatarDefault;
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const getTitle = () => {
    if (title.length <= 26) {
      return title;
    } else {
      return `${title.slice(0, 26)}...`;
    }
  };

  const handleClick = e => {
    if (isContextMenuOpen) {
      setIsContextMenuOpen(false);
      return;
    }
    if (
      e.currentTarget === e.target.parentElement ||
      e.currentTarget === e.target
    ) {
      setIsInfoOpen(true);
    }
  };

  const handleClose = e => {
    setIsInfoOpen(false);
  };
  const handleDragStart = (e, capturedTask) => {
    e.stopPropagation();
    setDraggedTask(capturedTask);
  };
  return (
    <CardContainer
      onClick={e => handleClick(e)}
      draggable={true}
      onDragStart={e => handleDragStart(e, task)}
    >
      <TaskTitle> {getTitle()} </TaskTitle>
      <StatsContainer>
        <ImageContainer>
          <UserAvatar src={userAvatar} alt="U" />
          {priority === 'low' && <LowPriority>Low</LowPriority>}
          {priority === 'medium' && <MediumPriority>Medium</MediumPriority>}
          {priority === 'high' && <HighPriority>High</HighPriority>}
        </ImageContainer>
        <ToolbarContainer>
          <TaskToolbar
            task={task}
            columns={sortedColumnList}
            setIsContextMenuOpen={setIsContextMenuOpen}
          />
        </ToolbarContainer>
      </StatsContainer>
      <TaskModal
        onClose={handleClose}
        task={task}
        isModalOpen={isInfoOpen}
        readOnlyMode={true}
      />
    </CardContainer>
  );
};
