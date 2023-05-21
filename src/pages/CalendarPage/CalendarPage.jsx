import { Wrapper } from './CalendarPage.styled';
import CalendarToolbar from 'components/CalendarToolbar/CalendarToolbar';
import { useCallback, useEffect, useState } from 'react';
import {
  addDays,
  addMonths,
  setDefaultOptions,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import { useLocation } from 'react-router-dom';
import { useAuth } from 'hooks';
import { fetchTasks } from 'redux/tasks/tasks.operations';
import { useDispatch } from 'react-redux';
import ChoosedMonth from 'components/ChoosedMonth/ChoosedMonth';
import ChoosedDay from 'components/ChooseDay/ChooseDay';
import { useTasks } from 'hooks/useTasks';
import { toast } from 'react-hot-toast';
import { setActiveDateStore } from 'redux/tasks/tasks.slice';

export default function CalendarPage() {
  setDefaultOptions({ weekStartsOn: 1 }); //for date-fns, to start count weeks from monday
  const dispatch = useDispatch();
  const location = useLocation();
  const currentDate = new Date();
  const [activeDate, setActiveDate] = useState(currentDate);
  const { isLoggedIn } = useAuth();
  const { savedPeriod } = useTasks();

  const isDayPage = location.pathname.includes('day');

  const changeActiveDay = (value, day) => {
    if (day) {
      return setActiveDate(day);
    }
    if (value === 0) {
      return setActiveDate(currentDate);
    }
    if (location.pathname.includes('day')) {
      return setActiveDate(addDays(activeDate, value));
    } else {
      setActiveDate(addMonths(activeDate, value));
    }
  };

  const getPeriod = useCallback(
    activeDate => {
      const filterDateFrom = startOfWeek(
        startOfMonth(activeDate)
      ).toISOString();

      if (savedPeriod.includes(filterDateFrom)) {
        return false;
      }

      const amoutDaysForFetch = 41;
      return {
        filterDateFrom: startOfWeek(startOfMonth(activeDate)),
        filterDateTo: addDays(
          startOfWeek(startOfMonth(activeDate)),
          amoutDaysForFetch
        ),
      };
    },
    [savedPeriod]
  );

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;
    const period = getPeriod(activeDate);
    if (!period) {
      return;
    }

    dispatch(fetchTasks({ period, signal }))
      .unwrap()
      .catch(e => {
        if (e !== 'canceled') {
          toast.error(`Unable to load tasks`);
        }
      });

    return () => {
      controller.abort();
    };
  }, [dispatch, isLoggedIn, activeDate, getPeriod]);

  useEffect(() => {
    dispatch(setActiveDateStore(JSON.stringify(activeDate)));
  }, [activeDate, dispatch]);

  return (
    <Wrapper>
      <CalendarToolbar
        activeDate={activeDate}
        changeActiveDay={changeActiveDay}
        isDayPage={isDayPage}
        currentDate={currentDate}
      />

      {isDayPage ? (
        <ChoosedDay
          currentDate={currentDate}
          activeDate={activeDate}
          changeActiveDay={changeActiveDay}
        />
      ) : (
        <ChoosedMonth
          currentDate={currentDate}
          activeDate={activeDate}
          changeActiveDay={changeActiveDay}
        />
      )}
    </Wrapper>
  );
}
