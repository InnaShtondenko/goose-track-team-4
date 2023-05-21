import {
  addDays,
  eachDayOfInterval,
  endOfDay,
  format,
  getMonth,
  getTime,
  isSameDay,
  parseJSON,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

import {
  DayWrapper,
  RowWrapper,
  CurrentDayWrapper,
  CalendarWrapper,
  TasksWrapper,
  MoreTasksLabel,
  CellLink,
  TableList,
} from './CalendarTable.styled';
import { useAuth } from 'hooks';
import { useTasks } from 'hooks/useTasks';
import LoaderForCalendar from 'components/Loader/LoaderForCalendar';
import { TaskContainer } from './TaskContainer/TaskContainer';

export default function CalendarTable({
  changeActiveDay,
  activeDate,
  currentDate,
}) {
  const { isRefresing, isLoggedIn } = useAuth();
  const { tasks, isTasksLoading } = useTasks();

  const currentMonth = getMonth(activeDate);
  const totalDaysForGrid = 41; // 42 = (0 - 41)
  const startDay = startOfWeek(startOfMonth(activeDate));
  const endDay = addDays(startDay, totalDaysForGrid);
  const visibleDaysArray = eachDayOfInterval({
    start: startDay,
    end: endDay,
  });

  const isCurrentDay = day => isSameDay(currentDate, day);
  const getIsSameMonth = day => currentMonth === getMonth(day);
  const getDayNumber = day => format(day, 'd');
  const getDayForLink = day => format(day, 'ddMMMMyyyy');

  let filteredTasks = [];
  const getDayTasks = day => {
    filteredTasks = tasks?.filter(
      task =>
        getTime(parseJSON(task.date)) >= startOfDay(day) &&
        getTime(parseJSON(task.date)) <= endOfDay(day)
    );
    filteredTasks?.sort((a, b) => a.date - b.date);
  };

  const handleClick = (e, item) => {
    e.stopPropagation();
    const { nodeName } = e.target;

    if (nodeName === 'BUTTON') {
      e.preventDefault();
      return;
    }
    changeActiveDay(0, item);
  };

  return (
    <div>
      <CalendarWrapper>
        {(!isLoggedIn || isTasksLoading) && <LoaderForCalendar />}
        <TableList>
          {visibleDaysArray.map(day => (
            <li key={format(day, 'ddMMyyyy')}>
              <CellLink
                to={`/calendar/day/${getDayForLink(day)}`}
                onClick={e => handleClick(e, day)}
                issamemonth={getIsSameMonth(day).toString()}
              >
                <RowWrapper>
                  {isCurrentDay(day) ? (
                    <CurrentDayWrapper>{getDayNumber(day)}</CurrentDayWrapper>
                  ) : (
                    <DayWrapper isSameMonth={getIsSameMonth(day)}>
                      {getDayNumber(day)}
                    </DayWrapper>
                  )}
                </RowWrapper>
                {isLoggedIn && !isRefresing && !isTasksLoading && (
                  <TasksWrapper>
                    {getDayTasks(day)}
                    {filteredTasks.slice(0, 2).map((task, idx) => (
                      <TaskContainer key={idx + task._id} task={task} />
                    ))}
                    {filteredTasks.length > 2 && (
                      <MoreTasksLabel>
                        {filteredTasks.length - 2} more..
                      </MoreTasksLabel>
                    )}
                  </TasksWrapper>
                )}
              </CellLink>
            </li>
          ))}
        </TableList>
      </CalendarWrapper>
    </div>
  );
}
