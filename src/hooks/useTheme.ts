import { createContext, useContext } from 'react';

type IColorContext = {
  color: string;
  setColor: (color: string) => void;
};

export const defaultColorContext = {
  color: '0693e3',
  setColor: (color: string) => {
    //no ops
  },
};

export const ColorContext = createContext<IColorContext>(defaultColorContext);

export const useThemeColor = () => {
  const { color, setColor } = useContext(ColorContext);

  return { color, setColor };
};
