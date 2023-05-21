import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from 'redux/auth/auth.operations';
import {
  selectIsLoggedIn,
  selectUser,
  selectIsUpdating,
} from 'redux/auth/auth.selectors';

import { isWeekend, addDays, parseISO, format } from 'date-fns';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import {
  StyledForm,
  Photo,
  Plug,
  PhotoSelection,
  LabelPhotoSelection,
  SelectionIcon,
  UserName,
  UserRole,
  Wrapper,
  Label,
  LabelName,
  Input,
  ErrorChoosingFileMessage,
  ErrorInputMessage,
  StyledDatePicker,
  StyledCalendar,
  Button,
} from './UserForm.styled';
import 'react-datepicker/dist/react-datepicker.css';

export const UserForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isUpdating = useSelector(selectIsUpdating);
  const user = useSelector(selectUser);

  const [avatar, setAvatar] = useState('');
  const initialValues = {
    name: user.name ? user.name : '',
    birthday: user.birthday ? parseISO(user.birthday) : '',
    email: user.email ? user.email : '',
    phone: user.phone ? user.phone : '',
    telegram: user.telegram ? user.telegram : '',
    avatarFile: '',
  };

  const schema = Yup.object().shape({
    avatarFile: Yup.mixed().test(
      'fileType',
      'Invalid file type. Allowed .jpeg or .png',
      value => {
        if (!value) return true;
        return ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type);
      }
    ),
    name: Yup.string()
      .min(3, 'The name must be at least 3 characters.')
      .max(16, 'The name must be 16 characters or less.')
      .required('The name is required.'),
    email: Yup.string()
      .matches(/^[\w.%+-]+@(?:[\w-]+\.)+\w{2,}$/, 'Invalid email address.')
      .required('The email is required'),
    birthday: Yup.string()
      .nullable()
      .transform(v => (v === '' ? null : v)),
    phone: Yup.string()
      .matches(/^[+]{0,1}[\d]+$/, 'Invalid number.')
      .nullable()
      .transform(v => (v === '' ? null : v)),
    telegram: Yup.string()
      .min(3, 'The name must be at least 3 characters.')
      .max(16, 'The telegram must be 16 characters or less.')
      .nullable()
      .transform(v => (v === '' ? null : v)),
  });

  const handleImageUpload = event => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFieldValue('avatarFile', file);
      setAvatar(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = async (_, actions) => {
    const { name, birthday, email, phone, telegram, avatarFile } = values;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('birthday', birthday ? birthday : '');
    formData.append('email', email);
    formData.append('phone', phone ? phone : '');
    formData.append('telegram', telegram ? telegram : '');
    if (avatarFile) {
      formData.append('avatarFile', avatarFile);
    }

    dispatch(updateUser(formData))
      .unwrap()
      .then(res => {
        toast.success('Your profile has been changed successfully.');
        actions.setSubmitting(true);
        // actions.setSubmitting(false);
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const {
    values,
    errors,
    touched,
    dirty,
    isSubmitting,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
    setSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit,
  });

  useEffect(() => {
    if (isLoggedIn) {
      const { name, birthday, email, phone, telegram, avatarURL } = user;
      setAvatar(avatarURL);
      setFieldValue('name', name);
      setFieldValue('email', email);
      setFieldValue('birthday', birthday ? parseISO(birthday) : '');
      setFieldValue('phone', phone);
      setFieldValue('telegram', telegram);
    }
  }, [isLoggedIn, setFieldValue, user]);

  return (
    user.email && (
      <StyledForm
        autoComplete="off"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        {avatar ? <Photo src={avatar} alt="User's photo" /> : <Plug />}
        <LabelPhotoSelection>
          <SelectionIcon />
          <PhotoSelection
            type="file"
            name="avatarFile"
            onBlur={handleBlur}
            onChange={event => {
              handleImageUpload(event);
              setSubmitting(false);
            }}
          />
        </LabelPhotoSelection>
        <ErrorChoosingFileMessage>{errors.avatarFile}</ErrorChoosingFileMessage>
        <UserName>{values.name.length > 1 ? values.name : 'Name'}</UserName>
        <UserRole>User</UserRole>
        <Wrapper>
          <Label>
            <LabelName>User Name</LabelName>
            <Input
              type="text"
              name="name"
              placeholder="Edit your name"
              value={values.name}
              onBlur={handleBlur}
              // onChange={handleChange}
              onChange={event => {
                handleChange(event);
                setSubmitting(false);
              }}
            />
            {errors.name && touched.name ? (
              <ErrorInputMessage>{errors.name}</ErrorInputMessage>
            ) : (
              <ErrorInputMessage />
            )}
          </Label>

          <Label>
            <LabelName>Birthday</LabelName>
            <StyledCalendar>
              <StyledDatePicker
                name="birthday"
                placeholderText={format(new Date(), 'dd/MM/yyyy')}
                selected={values.birthday}
                value={values.birthday}
                onBlur={handleBlur}
                onChange={date => {
                  setFieldValue('birthday', date);
                  setSubmitting(false);
                }}
                dateFormat="dd/MM/yyyy"
                // showMonthDropdown
                // showYearDropdown
                calendarStartDay={1}
                maxDate={addDays(new Date(), 0)}
                highlightDates={date => isWeekend(date)}
              />
            </StyledCalendar>
            {errors.birthday && touched.birthday ? (
              <ErrorInputMessage>{errors.birthday}</ErrorInputMessage>
            ) : (
              <ErrorInputMessage />
            )}
          </Label>
          <Label>
            <LabelName>Email</LabelName>
            <Input
              type="email"
              name="email"
              placeholder="Edit your email"
              value={values.email}
              onBlur={handleBlur}
              // onChange={handleChange}
              onChange={event => {
                handleChange(event);
                setSubmitting(false);
              }}
              required
            />
            {errors.email && touched.email ? (
              <ErrorInputMessage>{errors.email}</ErrorInputMessage>
            ) : (
              <ErrorInputMessage />
            )}
          </Label>
          <Label>
            <LabelName>Phone</LabelName>
            <Input
              type="text"
              name="phone"
              placeholder="Add a phone number"
              value={values.phone}
              onBlur={handleBlur}
              // onChange={handleChange}
              onChange={event => {
                handleChange(event);
                setSubmitting(false);
              }}
            />
            {errors.phone && touched.phone ? (
              <ErrorInputMessage>{errors.phone}</ErrorInputMessage>
            ) : (
              <ErrorInputMessage />
            )}
          </Label>
          <Label>
            <LabelName>Telegram</LabelName>
            <Input
              type="text"
              name="telegram"
              placeholder="Add a link to Telegram"
              value={values.telegram}
              onBlur={handleBlur}
              // onChange={handleChange}
              onChange={event => {
                handleChange(event);
                setSubmitting(false);
              }}
            />
            {errors.telegram && touched.telegram ? (
              <ErrorInputMessage>{errors.telegram}</ErrorInputMessage>
            ) : (
              <ErrorInputMessage />
            )}
          </Label>
        </Wrapper>

        {isUpdating ? (
          <Button type="submit" disabled>
            Submitting...
          </Button>
        ) : (
          <Button type="submit" disabled={!dirty || isSubmitting}>
            Save change
          </Button>
        )}
      </StyledForm>
    )
  );
};
