import { useSelector } from 'react-redux';
import {
  getError,
  getIsTasksLoading,
  getSavedPeriods,
  getTasks,
} from 'redux/tasks/tasks.selectors';

export const useTasks = () => {
  const tasks = useSelector(getTasks);
  const isTasksLoading = useSelector(getIsTasksLoading);
  const error = useSelector(getError);
  const savedPeriod = useSelector(getSavedPeriods);

  return {
    tasks,
    isTasksLoading,
    error,
    savedPeriod,
  };
};
