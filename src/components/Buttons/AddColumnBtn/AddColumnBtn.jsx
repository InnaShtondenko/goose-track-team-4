import React, { useState } from 'react';
import AddTaskIcon from './AddTaskIcon.svg';
import { StyledBtn } from './AddColumnBtn.styled';
import ColumnModal from 'components/ColumnModal/ColumnModal';

export const AddColumnBtn = ({ children, column }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <StyledBtn onClick={handleOpenModal}>
                <img src={AddTaskIcon} alt="+"></img>
                <span>{children}</span>
            </StyledBtn>
            <ColumnModal
                onClose={handleCloseModal}
                isModalOpen={isModalOpen}
                column={column}
            />
        </>
    );
};