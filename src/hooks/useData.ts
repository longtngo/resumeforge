import { useState, useEffect, useCallback } from 'react';
import { IData } from 'src/types';

export const useData = (defaultValue?: IData) => {
  const [internalData, setInternalData] = useState<IData>();

  const setData = useCallback((newData: IData) => {
    localStorage.setItem('data', JSON.stringify(newData));
    setInternalData(newData);
  }, []);

  useEffect(() => {
    const dataStr = localStorage.getItem('data');

    if (!dataStr) {
      if (defaultValue) {
        setData(defaultValue);
        setInternalData(defaultValue);
      }
    } else {
      setInternalData(JSON.parse(dataStr));
    }
  }, [defaultValue, setData]);

  return {
    data: internalData,
    setData,
  };
};
