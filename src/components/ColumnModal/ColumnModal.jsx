import React from 'react';
// import { useSelector } from 'react-redux';
// import { getActiveDate } from 'redux/tasks/tasks.selectors';
import Modal from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addColumn } from 'redux/columns/columns.operations';
import ColumnForm from 'components/ColumnForm/ColumnForm';

function ColumnModal({ column, onClose, isModalOpen }) {
  const dispatch = useDispatch();
//   const activeDate = new Date(JSON.parse(useSelector(getActiveDate)));

  const handleSubmit = newData => {
    
        dispatch(addColumn({
            ...newData,
        }))
        .unwrap()
        .then(() => toast.success(`Created!`))
        .catch(e => {
          toast.error(`Failed to add column!`);
        });

    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal onClose={handleClose} isModalOpen={isModalOpen}>
      <ColumnForm
        column={column}
        onSubmit={handleSubmit}
        onClose={handleClose}
        isModalOpen={isModalOpen}
      />
    </Modal>
  );
}

export default ColumnModal;
