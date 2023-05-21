import {
  addDays,
  addMonths,
  format,
  parseISO,
  startOfDay,
  startOfMonth,
} from 'date-fns';
import {
  ButtonsWrapper,
  DateField,
  PeriodPaginationWrapper,
  StyledHiChevronLeft,
  StyledHiChevronRight,
  StyledLink,
  StyledLinkToday,
} from './PeriodPaginator.styled';
import { useAuth } from 'hooks';

export default function PeriodPaginator({
  activeDate,
  changeActiveDay,
  isDayPage,
  currentDate,
}) {
  const { user } = useAuth();
  const date = isDayPage
    ? format(activeDate, 'dd MMMM yyyy')
    : format(activeDate, 'MMMM yyyy');

  const dateForLinkNext = isDayPage
    ? format(addDays(activeDate, 1), 'ddMMMMyyyy')
    : format(addMonths(activeDate, 1), 'MMMMyyyy');

  const dateForLinkToday = isDayPage
    ? format(currentDate, 'ddMMMMyyyy')
    : format(currentDate, 'MMMMyyyy');

  const dateForLinkPrev = isDayPage
    ? format(addDays(activeDate, -1), 'ddMMMMyyyy')
    : format(addMonths(activeDate, -1), 'MMMMyyyy');

  const isCreatedAtDay = isDayPage
    ? startOfDay(parseISO(user.createdAt)) >= startOfDay(activeDate)
    : parseISO(user.createdAt) >= startOfMonth(activeDate);

  return (
    <PeriodPaginationWrapper>
      <div>
        <DateField>{date}</DateField>
      </div>
      <ButtonsWrapper>
        {isDayPage ? (
          <>
            <StyledLink
              disabled={isCreatedAtDay}
              onClick={() => changeActiveDay(-1)}
              to={`/calendar/day/${dateForLinkPrev}`}
            >
              <StyledHiChevronLeft />
            </StyledLink>
            <StyledLink
              onClick={() => changeActiveDay(1)}
              to={`/calendar/day/${dateForLinkNext}`}
            >
              <StyledHiChevronRight />
            </StyledLink>

            <StyledLinkToday
              onClick={() => changeActiveDay(0)}
              to={`/calendar/day/${dateForLinkToday}`}
            >
              Today
            </StyledLinkToday>
          </>
        ) : (
          <>
            <StyledLink
              disabled={isCreatedAtDay}
              to={`/calendar/month/${dateForLinkPrev}`}
              onClick={() => changeActiveDay(-1)}
            >
              <StyledHiChevronLeft />
            </StyledLink>

            <StyledLink
              to={`/calendar/month/${dateForLinkNext}`}
              onClick={() => changeActiveDay(1)}
            >
              <StyledHiChevronRight />
            </StyledLink>
            <StyledLinkToday
              onClick={() => changeActiveDay(0)}
              to={`/calendar/month/${dateForLinkToday}`}
            >
              Today
            </StyledLinkToday>
          </>
        )}
      </ButtonsWrapper>
    </PeriodPaginationWrapper>
  );
}
