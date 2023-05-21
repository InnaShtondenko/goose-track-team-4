import { useSelector } from 'react-redux';
import {
  selectColumns,
  selectIsLoading,
  selectError,
} from 'redux/columns/columns.selectors';

export const useColumns = () => {
  const columns = useSelector(selectColumns);
  const isColumnLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  return {
    columns,
    isColumnLoading,
    error,
  };
};
