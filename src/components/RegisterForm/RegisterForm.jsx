import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import { register } from '../../redux/auth/auth.operations';
import { LoginRegisterBtn } from '../Buttons/LoginRegisterBtn/LoginRegisterBtn';

import {
  StyledContainer,
  FormHeader,
  StyledForm,
  InputContainer,
  StyledLabel,
  StyledField,
  ErrorMsgContainer,
} from './RegisterForm.styled';
import { addColumn } from 'redux/columns/columns.operations';

export const RegisterForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const initColumns = [
    { title: 'To do', number: 1 },
    { title: 'In progress', number: 2 },
    { title: 'Done', number: 3 },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Your name is too short')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(res => {
        const successNotify = () =>
          toast.success(
            `Welcome ${res.data.user.name}! Enjoy using the Goose App :)`
          );
        successNotify();
        resetForm();
        initColumns.forEach(column => { dispatch(addColumn(column))});
    
      })
      .catch(error => {
        const errorNotify = () => toast.error(`${error.message}`);
        errorNotify();
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <StyledContainer>
      <FormHeader>Sign Up</FormHeader>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        {({ errors, touched, isSubmitting }) => (
          <StyledForm>
            <InputContainer>
              <StyledLabel
                htmlFor="name"
                aria-invalid={touched.name && errors.name ? 'true' : 'false'}
                data-valid={touched.name && !errors.name ? 'true' : 'false'}
              >
                Name
                <StyledField
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={touched.name && errors.name ? 'true' : 'false'}
                  data-valid={touched.name && !errors.name ? 'true' : 'false'}
                />
                {/* If this field has been touched, and it contains an error, display it
                 */}
                {touched.name && errors.name && (
                  <ErrorMsgContainer>{errors.name}</ErrorMsgContainer>
                )}
              </StyledLabel>
            </InputContainer>

            <InputContainer>
              <StyledLabel
                htmlFor="email"
                aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                data-valid={touched.email && !errors.email ? 'true' : 'false'}
              >
                Email
                <StyledField
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={
                    touched.email && errors.email ? 'true' : 'false'
                  }
                  data-valid={touched.email && !errors.email ? 'true' : 'false'}
                />
                {touched.email && errors.email && (
                  <ErrorMsgContainer>{errors.email}</ErrorMsgContainer>
                )}
              </StyledLabel>
            </InputContainer>

            <InputContainer>
              <StyledLabel
                htmlFor="password"
                aria-invalid={
                  touched.password && errors.password ? 'true' : 'false'
                }
                data-valid={
                  touched.password && !errors.password ? 'true' : 'false'
                }
              >
                Password
                <StyledField
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  autoComplete="off"
                  aria-invalid={
                    touched.password && errors.password ? 'true' : 'false'
                  }
                  data-valid={
                    touched.password && !errors.password ? 'true' : 'false'
                  }
                />
                {touched.password && errors.password && (
                  <ErrorMsgContainer>{errors.password}</ErrorMsgContainer>
                )}
              </StyledLabel>
            </InputContainer>

            <LoginRegisterBtn
              disabled={isSubmitting}
              btnText={isSubmitting ? `Submiting...` : `Sign Up`}
            />
          </StyledForm>
        )}
      </Formik>
    </StyledContainer>
  );
};
