import React from 'react';
import { IData } from 'src/types';
import demoData from '../../data/demo.json';

export const DataContext = React.createContext<IData>(demoData);
