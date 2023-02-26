import { useContext } from 'react';
import { DataContext } from 'src/components/providers/dataProvider';

export const useData = () => {
  const data = useContext(DataContext);

  return data;
};
