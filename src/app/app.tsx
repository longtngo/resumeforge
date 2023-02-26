import JsonURL from '@jsonurl/jsonurl';
import { CssBaseline } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { DataContext } from 'src/components/providers/dataProvider';
import { View } from 'src/pages';
import { IData } from 'src/types';
import demoData from '../data/demo.json';

export function App() {
  const [data, setData] = useState<IData>(demoData);
  const isInitialized = useRef<boolean>(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    let result = demoData;

    if (!window.location.search) return;

    const query = window.location.search
      .substring(1)
      .split('&')
      .map((str) => {
        const [key, value] = str.split('=');
        return { key, value };
      });
    const queryData = query.find((item) => item.key === 'data')?.value;
    if (queryData) {
      try {
        result = JsonURL.parse(decodeURIComponent(queryData));
      } catch (e) {
        console.log('Failed to parse data', e);
      }
    }

    setData(result);
  }, []);

  return (
    <DataContext.Provider value={data}>
      <CssBaseline>
        <View />
      </CssBaseline>
    </DataContext.Provider>
  );
}

export default App;
