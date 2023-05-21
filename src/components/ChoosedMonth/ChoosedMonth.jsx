import CalendarTable from 'components/CalendarTable/CalendarTable';
import MonthCalendarHead from 'components/MonthCalendarHead/MonthCalendarHead';

export default function ChoosedMonth({
  currentDate,
  activeDate,
  changeActiveDay,
}) {
  return (
    <div>
      <MonthCalendarHead currentDate={currentDate} />
      <CalendarTable
        currentDate={currentDate}
        activeDate={activeDate}
        changeActiveDay={changeActiveDay}
      />
    </div>
  );
}
