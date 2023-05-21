import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/auth/auth.selectors';
import { deleteColumn } from 'redux/columns/columns.operations';
import { toast } from 'react-hot-toast';

import Modal from 'components/Modal/Modal';

import {
  Toolbar,
  Button,
  DeleteTaskIcon,
  StyledP,
  ButtonsWrapper,
  StyledButton,
} from './ColumnToolbar.styled';
import { deleteTask } from 'redux/tasks/tasks.operations';

const ColumnToolbar = ({ column, tasksForDeleteColumn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);

  const handleDelete = id => {
    setIsModalOpen(false);
    dispatch(deleteColumn(id))
      .unwrap()
      .then(() => {
        tasksForDeleteColumn.forEach(task => {
          dispatch(deleteTask(task._id));
        });
      })
      .catch(e => {
        toast.error(`Unable to delete column`);
      });
  };

  return (
    <>
      <Toolbar>
        <Button onClick={() => setIsModalOpen(true)}>
          <DeleteTaskIcon theme={currentTheme} />
        </Button>
      </Toolbar>
      <Modal onClose={() => setIsModalOpen(false)} isModalOpen={isModalOpen}>
        <StyledP>
          Are you sure you want to delete? The column will be completely deleted
          with all tasks.
        </StyledP>
        <ButtonsWrapper>
          <StyledButton type="button" onClick={() => handleDelete(column._id)}>
            Yes
          </StyledButton>
          <StyledButton type="button" onClick={() => setIsModalOpen(false)}>
            No
          </StyledButton>
        </ButtonsWrapper>
      </Modal>
    </>
  );
};

export default ColumnToolbar;
