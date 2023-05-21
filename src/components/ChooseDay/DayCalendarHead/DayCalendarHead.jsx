import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isSameDay,
  startOfWeek,
} from 'date-fns';
import {
  DayName,
  DayNameAndNumberWrapper,
  DayNumber,
  DaysWrapper,
  MobileDayName,
} from './DayCalendarHead.styled';

export default function DayCalendarHead({
  currentDate,
  activeDate,
  changeActiveDay,
}) {
  const daysArray = eachDayOfInterval({
    start: startOfWeek(activeDate),
    end: endOfWeek(activeDate),
  });

  const getDayNameMobile = day => format(day, 'eeeee').toUpperCase();
  const getDayName = day => format(day, 'eee').toUpperCase();
  const getDayNumber = day => format(day, 'd');
  const isCurrentDay = day => isSameDay(currentDate, day);
  const isSelectedDay = day => isSameDay(activeDate, day);
  const dayForLink = day => format(day, 'ddMMMMyyyy');

  return (
    <DaysWrapper>
      {daysArray.map(day => (
        <DayNameAndNumberWrapper key={getDayName(day)}>
          <MobileDayName>{getDayNameMobile(day)}</MobileDayName>
          <DayName>{getDayName(day)}</DayName>

          <DayNumber
            iscurrentday={isCurrentDay(day).toString()}
            isselectedday={isSelectedDay(day).toString()}
            onClick={() => changeActiveDay(0, day)}
            to={`/calendar/day/${dayForLink(day)}`}
          >
            {getDayNumber(day)}
          </DayNumber>
        </DayNameAndNumberWrapper>
      ))}
    </DaysWrapper>
  );
}
