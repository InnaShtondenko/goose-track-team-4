import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveDate } from 'redux/tasks/tasks.selectors';
// import { createTask, updateTask } from 'redux/tasks/tasks.operations';
import Modal from '../Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { editTask, addTask } from 'redux/tasks/tasks.operations';

function TaskModal({ task, columnId, onClose, isModalOpen, readOnlyMode }) {

// function TaskModal({
//   task,
//   columnId,
//   category,
//   onClose,
//   isModalOpen,
//   readOnlyMode,
// }) {

  const dispatch = useDispatch();
  const activeDate = new Date(JSON.parse(useSelector(getActiveDate)));

  const handleSubmit = newData => {
    if (!task) {
      // If there's no initial data, we're creating a new task
      dispatch(addTask({ ...newData, date: activeDate, category: columnId }))
        .unwrap()
        .then(() => toast.success(`Created!`))
        .catch(e => {
          toast.error(`Failed to add task!`);
        });
    } else {
      dispatch(editTask(newData))
        .unwrap()
        .then(() => toast.success(`Updated!`))
        .catch(e => {
          toast.error(`Unable to update task`);
        });
    }
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal onClose={handleClose} isModalOpen={isModalOpen}>
      <TaskForm
        task={task}
        columnId={columnId}
        onSubmit={handleSubmit}
        onClose={handleClose}
        isModalOpen={isModalOpen}
        readOnlyMode={readOnlyMode}
      />
    </Modal>
  );
}

export default TaskModal;
