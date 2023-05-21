import { ButtonsWrapper, StyledLink } from './PeriodTypeSelect.styled';
import { format } from 'date-fns';

export default function PeriodTypeSelect({ activeDate, isDayPage }) {
  const monthForLink = format(activeDate, 'MMMMyyyy');
  const dayForLink = format(activeDate, 'ddMMMMyyyy');

  return (
    <ButtonsWrapper>
      <StyledLink
        isdaypage={(!isDayPage).toString()}
        to={`/calendar/month/${monthForLink}`}
      >
        Month
      </StyledLink>
      <StyledLink
        isdaypage={isDayPage.toString()}
        to={`/calendar/day/${dayForLink}`}
      >
        Day
      </StyledLink>
    </ButtonsWrapper>
  );
}
