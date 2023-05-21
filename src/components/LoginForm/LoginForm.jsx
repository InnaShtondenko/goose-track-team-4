import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import { logIn } from '../../redux/auth/auth.operations';
import { LoginRegisterBtn } from '../Buttons/LoginRegisterBtn/LoginRegisterBtn';

import {
  StyledContainer,
  FormHeader,
  StyledForm,
  InputContainer,
  StyledLabel,
  StyledField,
  ErrorMsgContainer,
} from '../RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Your password can not be so short')
      .required('Password is required'),
  });

  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await dispatch(logIn(values)).unwrap();
      resetForm();
    } catch (error) {
      const errorNotify = () => toast.error(`${error.message}`);
      errorNotify();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <StyledContainer>
      <FormHeader>Log In</FormHeader>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <StyledForm>
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
                {/* If this field has been touched, and it contains an error, display it
                 */}
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
                  autoComplete="current-password"
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
              btnText={isSubmitting ? `Loading...` : `Log In`}
            />
          </StyledForm>
        )}
      </Formik>
    </StyledContainer>
  );
};
