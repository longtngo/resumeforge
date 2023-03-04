import JsonURL from '@jsonurl/jsonurl';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useData } from 'src/hooks/useData';
import { ColorContext, defaultColorContext } from 'src/hooks/useTheme';
import { View } from 'src/pages';
import demoData from '../data/demo.json';

export function App() {
  const [color, setColor] = useState(defaultColorContext.color);
  const { setData } = useData(demoData);
  const isInitialized = useRef<boolean>(false);

  const setPersistedColor = useCallback((color: string) => {
    localStorage.setItem('theme', color);
    setColor(color);
  }, []);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    const savedColor = localStorage.getItem('theme');

    if (savedColor) {
      setColor(savedColor);
    }

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
  }, [setData]);

  const theme = useMemo(() => {
    const newThemeConfig = {
      palette: { primary: { main: color } },
    };
    return createTheme(newThemeConfig);
  }, [color]);

  return (
    <ColorContext.Provider value={{ color, setColor: setPersistedColor }}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <View />
        </CssBaseline>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
