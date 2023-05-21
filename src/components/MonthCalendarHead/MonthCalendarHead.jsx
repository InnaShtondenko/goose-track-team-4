import {
  eachDayOfInterval,
  endOfWeek,
  format,
  getDay,
  startOfWeek,
} from 'date-fns';
import {
  DayName,
  DayNameWrapper,
  DaysNamesWrapper,
  MobileDayName,
} from './MonthCalendarHead.styled';

export default function MonthCalendarHead({ currentDate }) {
  const daysNamesArray = eachDayOfInterval({
    start: startOfWeek(currentDate),
    end: endOfWeek(currentDate),
  });

  const getDayNameMobile = day => format(day, 'eeeee').toUpperCase();
  const getDayName = day => format(day, 'eee').toUpperCase();
  const getIsWeekend = day => getDay(day) === 0 || getDay(day) === 6;

  return (
    <DaysNamesWrapper>
      {daysNamesArray.map(day => (
        <DayNameWrapper key={getDayName(day)} isWeekend={getIsWeekend(day)}>
          <MobileDayName>{getDayNameMobile(day)}</MobileDayName>
          <DayName>{getDayName(day)}</DayName>
        </DayNameWrapper>
      ))}
    </DaysNamesWrapper>
  );
}
