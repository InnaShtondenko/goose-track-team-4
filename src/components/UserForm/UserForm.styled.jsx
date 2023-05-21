import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import photoPlug from './ph_user.svg';
import { HiPlus } from 'react-icons/hi';
import {
  between,
  greaterThan,
  lesserThan,
} from './../../helpers/breakpoints.styled';

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 335px;
  margin: 0 auto;
  padding: 40px 18px 40px;

  background-color: ${({ theme }) => theme.colors.bgcUserProfileTheme};
  border-radius: ${({ theme }) => theme.radii.normal};

  ${lesserThan(
    'mobile',
    `
    margin: 0 20px;
    `
  )}

  ${greaterThan(
    'tablet',
    `
    max-width: 704px;
    padding-right: 175px;
    padding-left: 175px;
    padding-top: 170px;
    `
  )}

    ${greaterThan(
    'laptop',
    `
    max-width: 1087px;
    padding-right: 175px;
    padding-left: 175px;
    padding-top: 190px;
    `
  )}
`;

export const Photo = styled.img`
  position: absolute;
  left: 50%;
  top: 0px;
  transform: translate(-50%, -50%);
  width: 72px;
  height: 72px;
  object-fit: cover;

  background-color: ${({ theme }) => theme.colors.bgcUserProfileTheme};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.round};

  ${greaterThan(
    'tablet',
    `
    top: 100px; 
    width: 124px;
    height: 124px;
    `
  )}

  ${greaterThan(
    'laptop',
    `
    top: 120px; 
    `
  )}
`;

export const Plug = styled.div`
  position: absolute;
  left: 50%;
  top: 0px;
  transform: translate(-50%, -50%);
  width: 72px;
  height: 72px;

  background-color: ${({ theme }) => theme.colors.bgcUserProfileTheme};
  background-image: url(${photoPlug});
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: center;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.round};

  ${greaterThan(
    'tablet',
    `
    top: 100px;
    width: 124px;
    height: 124px;
    `
  )}

  ${greaterThan(
    'laptop',
    `
    top: 120px; 
    `
  )}
`;

export const LabelPhotoSelection = styled.label`
  position: absolute;
  left: calc(50% + 16px);
  top: 34px;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;

  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => theme.radii.round};
  background: ${({ theme }) => theme.colors.primary};

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.loginBtn};
  }

  ${greaterThan(
    'tablet',
    `
    top: 160px;
    left: calc(50% + 28px);
    width: 24px;
    height: 24px;
    `
  )}

  ${greaterThan(
    'laptop',
    `
    top: 180px; 
    `
  )}
`;

export const PhotoSelection = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const UserName = styled.h2`
  text-align: center;
  margin-bottom: 2px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.textUserProfileNameTheme};

  ${greaterThan(
    'tablet',
    `
    font-size: 18px;
    line-height: 1;
    margin-bottom: 6px;
    `
  )}
`;

export const UserRole = styled.p`
  text-align: center;
  margin-bottom: 40px;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.textUserProfileRoleTheme};

  ${greaterThan(
    'tablet',
    `
      font-size: 14px;
    `
  )}

  ${greaterThan(
    'laptop',
    `
      margin-bottom: 44px;
    `
  )}
`;

export const Wrapper = styled.div`
  ${greaterThan(
    'laptop',
    `
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      height: 320px;

      label:nth-child(-n+3) {
        margin-right: 50px;
      }
    `
  )}
`;

export const SelectionIcon = styled(HiPlus)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;

  color: ${({ theme }) => theme.colors.white};

  ${greaterThan(
    'tablet',
    `
        width: 16px;
        height: 16px;
    `
  )}
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${between(
    'tablet',
    'laptop',
    `
    max-width: 354px;
    margin: 0 auto 0;
    `
  )}
`;

export const LabelName = styled.span`
  margin-bottom: 8px;

  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 12px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.textUserProfileLabelTheme};

  ${greaterThan(
    'tablet',
    `
    font-size: 14px;
    `
  )}
`;

export const Input = styled.input`
  padding: 12px 14px;
  margin-bottom: 2px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 14px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.textUserProfileInputTheme};
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.colors.borderUserProfileTheme};
  border-radius: ${({ theme }) => theme.radii.light};

  &:focus-visible {
    outline: none;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.primary};
    text-decoration-thickness: 2px;
  }

  ${greaterThan(
    'tablet',
    `
    font-size: 16px;
    `
  )}
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 12px 14px;
  margin-bottom: 2px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 14px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.textUserProfileInputTheme};
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.colors.borderUserProfileTheme};
  border-radius: ${({ theme }) => theme.radii.light};

  &:focus-visible {
    outline: none;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.primary};
    text-decoration-thickness: 2px;
  }

  ${greaterThan(
    'tablet',
    `
    font-size: 16px;
    `
  )}
`;

export const StyledCalendar = styled.div`
  .react-datepicker {
    max-width: 327px;
    height: 100%;

    border-radius: ${({ theme }) => theme.radii.normal};
    border-color: ${({ theme }) => theme.colors.primary};
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSizes.s};
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};

    ${greaterThan(
      'tablet',
      `
    max-width: 373px; 
    `
    )}
  }

  .react-datepicker__triangle {
    &::before,
    &::after {
      content: none;
      display: none;
    }
  }

  .react-datepicker__header {
    position: relative;
    padding-bottom: 4px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .react-datepicker__navigation {
    top: 20px;
  }

  .react-datepicker__navigation-icon {
    &::before {
      border-color: ${({ theme }) => theme.colors.white};
    }
  }

  .react-datepicker__current-month {
    margin-bottom: 0;
    text-align: center;

    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-size: ${({ theme }) => theme.fontSizes.l};
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.white};

    ${greaterThan(
      'tablet',
      `
      font-size: 20px; 
      `
    )}
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    margin-bottom: 0;
  }

  .react-datepicker__day-name {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-align: center;
    text-transform: uppercase;
    width: 36px;

    ${greaterThan(
      'tablet',
      `
      font-size: 14px; 
      width: 40px;
      `
    )}
  }

  .react-datepicker__header__dropdown {
    margin-top: 10px;
  }

  .react-datepicker__month-dropdown,
  .react-datepicker__year-dropdown {
    margin-top: 12px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
  .react-datepicker__month-option,
  .react-datepicker__year-option {
    &:hover {
      background-color: rgba(255, 255, 255, 0.4);
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__year-read-view--down-arrow {
    border-color: ${({ theme }) => theme.colors.white};
  }

  .react-datepicker__month-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 8px;
    margin-bottom: 12px;
  }

  .react-datepicker__day {
    width: 2.3rem;
    height: 2.3rem;
    line-height: 2.3rem;
    text-align: center;
    margin: 2px;
    border-radius: 50%;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};
    }

    ${greaterThan(
      'tablet',
      `
      width: 2.6rem;
      height: 2.6rem;
      line-height: 2.6rem;
      font-size: 14px;
      `
    )}
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__day--weekend.react-datepicker__day--selected,
  .react-datepicker__day--weekend.react-datepicker__day--keyboard-selected {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }

  .react-datepicker__day--weekend {
    color: rgba(255, 255, 255, 0.2);
  }

  .react-datepicker__day--outside-month {
    visibility: hidden;
  }

  .react-datepicker__day--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorChoosingFileMessage = styled.div`
  height: 10px;
  margin-bottom: 4px;
  text-align: center;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1;
  color: ${props => props.theme.colors.invalid};

  ${greaterThan(
    'tablet',
    `
      margin-bottom: 8px;
      `
  )}
`;

export const ErrorInputMessage = styled.div`
  height: 10px;
  margin-bottom: 6px;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1;
  color: ${props => props.theme.colors.invalid};

  ${greaterThan(
    'tablet',
    `
      margin-bottom: 14px;
      `
  )}
`;

export const Button = styled.button`
  width: 58%;
  height: 46px;
  margin: 22px auto 0;

  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.radii.normal};

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.loginBtn};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${between(
    'tablet',
    'laptop',
    `
    width: 226px;
    height: 48px;
    margin: 16px auto 0;
    `
  )}

  ${greaterThan(
    'laptop',
    `
    width: 226px;
    height: 48px;
    margin: 40px auto 60px;
    `
  )}
`;
