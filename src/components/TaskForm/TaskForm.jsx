import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/auth/auth.selectors';

import {
  Form,
  Label,
  Input,
  ErrorMessage,
  TimeInput,
  TitleContainer,
  TimeContainer,
  InnerContainer,
  RadioContainer,
  RadioLabel,
  RadioInput,
  StyledRadioLabel,
  ButtonContainer,
  Button,
  RadioIconContainer,
  RadioIcon,
  RadioIconChecked,
  DescriptionContainer,
  Textarea,
} from './TaskForm.styled';

const TaskForm = ({
  task,
  category,
  onSubmit,
  onClose,
  isModalOpen,
  readOnlyMode = false,
}) => {
  const initialFormData = useMemo(() => {
    return {
      title: task?.title || '',
      start: task?.start || '10:00',
      end: task?.end || '14:00',
      priority: task?.priority || 'low',
      date: task?.date || '',
      category: task?.category || category || '', // Add category to formData only if it doesn't already exist in task
      description: task?.description || '',
    };
  }, [task, category]);

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
    const newTask = { ...task, ...formData };

    if (newTask.title.length === 0) {
      setError('Title is required!');
      return;
    } else if (newTask.title.length < 3) {
      setError('Minimum 3 characters are required!');
      return;
    } else if (newTask.title.length > 30) {
      setError('Maximum 30 characters are allowed!');
      return;
    }

    onSubmit(newTask);
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

  const getRadioColor = priority => {
    switch (priority) {
      case 'low':
        return '#72C2F8'; // blue
      case 'medium':
        return '#F3B249'; // yellow
      case 'high':
        return '#EA3D65'; // red
      default:
        return '#111111';
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TitleContainer>
        <Label htmlFor="title" theme={currentTheme}>
          Title
        </Label>
        <Input
          type="text"
          id="title"
          name="title"
          theme={currentTheme}
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter text"
          maxLength={30}
          disabled={readOnlyMode}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </TitleContainer>

      <TimeContainer>
        <InnerContainer>
          <Label htmlFor="start" theme={currentTheme}>
            Start
          </Label>
          <TimeInput
            type="time"
            id="start"
            name="start"
            theme={currentTheme}
            value={formData.start}
            onChange={handleChange}
            mask={[/[0-2]/, /\d/, ':', /[0-5]/, /\d/]}
            required
            readOnly={readOnlyMode}
          />
        </InnerContainer>
        <InnerContainer>
          <Label htmlFor="end" theme={currentTheme}>
            End
          </Label>
          <TimeInput
            type="time"
            id="end"
            name="end"
            theme={currentTheme}
            value={formData.end}
            onChange={handleChange}
            mask={[/[0-2]/, /\d/, ':', /[0-5]/, /\d/]}
            required
            readOnly={readOnlyMode}
          />
        </InnerContainer>
      </TimeContainer>

      <RadioContainer>
        <RadioLabel>
          <RadioInput
            name="priority"
            value="low"
            checked={formData.priority === 'low'}
            onChange={handleChange}
            disabled={readOnlyMode && formData.priority !== 'low'}
          />
          <RadioIconContainer>
            {formData.priority === 'low' ? (
              <RadioIconChecked color={getRadioColor('low')} />
            ) : (
              <RadioIcon color={getRadioColor('low')} />
            )}
          </RadioIconContainer>
          <StyledRadioLabel theme={currentTheme}>Low</StyledRadioLabel>
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            name="priority"
            value="medium"
            checked={formData.priority === 'medium'}
            onChange={handleChange}
            disabled={readOnlyMode && formData.priority !== 'medium'}
          />
          <RadioIconContainer>
            {formData.priority === 'medium' ? (
              <RadioIconChecked color={getRadioColor('medium')}>
                <RadioIcon color={getRadioColor('medium')} />
              </RadioIconChecked>
            ) : (
              <RadioIcon color={getRadioColor('medium')} />
            )}
          </RadioIconContainer>
          <StyledRadioLabel theme={currentTheme}>Medium</StyledRadioLabel>
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            name="priority"
            value="high"
            checked={formData.priority === 'high'}
            onChange={handleChange}
            disabled={readOnlyMode && formData.priority !== 'high'}
          />
          <RadioIconContainer>
            {formData.priority === 'high' ? (
              <RadioIconChecked color={getRadioColor('high')}>
                <RadioIcon color={getRadioColor('high')} />
              </RadioIconChecked>
            ) : (
              <RadioIcon color={getRadioColor('high')} />
            )}
          </RadioIconContainer>
          <StyledRadioLabel theme={currentTheme}>High</StyledRadioLabel>
        </RadioLabel>
      </RadioContainer>
      <DescriptionContainer>
        <Label htmlFor="description" theme={currentTheme}>
          Description
        </Label>
        <Textarea
          id="description"
          name="description"
          theme={currentTheme}
          value={formData.description}
          onChange={handleChange}
          placeholder="Please enter task description"
          rows={4}
          maxLength={120}
          disabled={readOnlyMode}
        />
      </DescriptionContainer>
      <ButtonContainer>
        {readOnlyMode ? (
          <Button type="button" onClick={handleClose}>
            Close
          </Button>
        ) : task ? (
          <Button type="submit" primary>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66699 14.3334L5.36651 12.9105C5.60313 12.8195 5.72145 12.774 5.83214 12.7146C5.93046 12.6618 6.02419 12.6009 6.11235 12.5324C6.21161 12.4554 6.30124 12.3658 6.48051 12.1865L14.0003 4.66671C14.7367 3.93033 14.7367 2.73642 14.0003 2.00004C13.264 1.26366 12.0701 1.26366 11.3337 2.00004L3.81385 9.51985C3.63458 9.69912 3.54494 9.78876 3.46792 9.88801C3.39951 9.97617 3.33859 10.0699 3.28582 10.1682C3.2264 10.2789 3.18089 10.3972 3.08988 10.6339L1.66699 14.3334ZM1.66699 14.3334L3.03907 10.766C3.13726 10.5107 3.18635 10.3831 3.27055 10.3246C3.34414 10.2735 3.43519 10.2542 3.52319 10.271C3.62388 10.2902 3.72058 10.3869 3.91398 10.5803L5.42004 12.0864C5.61344 12.2798 5.71014 12.3765 5.72937 12.4772C5.74617 12.5652 5.72685 12.6562 5.67576 12.7298C5.61729 12.814 5.48965 12.8631 5.23437 12.9613L1.66699 14.3334Z"
                stroke="white"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Edit
          </Button>
        ) : (
          <>
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
          </>
        )}
      </ButtonContainer>
    </Form>
  );
};

export default TaskForm;
