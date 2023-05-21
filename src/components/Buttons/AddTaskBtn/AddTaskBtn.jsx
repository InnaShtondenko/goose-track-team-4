import React, { useState } from 'react';
import AddTaskIcon from './AddTaskIcon.svg';
import { StyledButton } from './AddTaskBtn.styled';
import TaskModal from '../../TaskModal/TaskModal';

export const AddTaskBtn = ({ columnId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledButton onClick={handleOpenModal}>
        <img src={AddTaskIcon} alt="+"></img>
        <span> Add task </span>
      </StyledButton>
      <TaskModal
        columnId={columnId}
        onClose={handleCloseModal}
        isModalOpen={isModalOpen}
      />
    </>
  );
};
