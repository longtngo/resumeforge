import { createTheme } from '@mui/material';
import { createContext, useContext } from 'react';

type IColorContext = {
  color: string;
  setColor: (color: string) => void;
};

const defaultTheme = createTheme();

export const defaultColorContext = {
  color: defaultTheme.palette.primary.main,
  setColor: (color: string) => {
    //no ops
  },
};

export const ColorContext = createContext<IColorContext>(defaultColorContext);

export const useThemeColor = () => {
  const { color, setColor } = useContext(ColorContext);

  return { color, setColor };
};
