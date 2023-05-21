import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/auth/auth.selectors';

import {
  Form,
  Input,
  ErrorMessage,
  TitleContainer,
  ButtonContainer,
  Button,
} from './ColumnForm.styled';

const ColumnForm = ({ column, onSubmit, onClose, isModalOpen }) => {
  const initialFormData = useMemo(() => {
    return {
      title: column?.title || '',
      number: column?.length + 1 || 1
      };
  }, [column]);
  
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState(initialFormData);
  useEffect(() => {
    // Set initial formData on mount
    setFormData(initialFormData);
  }, [initialFormData]);

  useEffect(() => {
    // Reset formData if isModalOpen changes
    if (!isModalOpen) {
      setFormData(initialFormData);
      setError(null);
    }
  }, [isModalOpen, initialFormData]);

  const currentTheme = useSelector(selectTheme);

  const handleSubmit = e => {
    e.preventDefault();
    const newColumn = {
      ...formData
    };
    
    if (newColumn.title.length === 0) {
      setError('Title is required!');
      return;
    } else if (newColumn.title.length < 3) {
      setError('Minimum 3 characters are required!');
      return;
    } else if (newColumn.title.length > 15) {
      setError('Maximum 30 characters are allowed!');
      return;
    }

    onSubmit(newColumn);
    onClose();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TitleContainer>
        <Input
          type="text"
          id="title"
          name="title"
          theme={currentTheme}
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter new category title"
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </TitleContainer>

      <ButtonContainer>
           <Button type="submit" primary>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99996 4.16669V15.8334M4.16663 10H15.8333"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Add
            </Button>
            <Button type="button" onClick={handleClose}>
              Cancel
            </Button>
      </ButtonContainer>
    </Form>
  );
};

export default ColumnForm;
