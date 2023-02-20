import { IDateRange } from './common';

export interface IWork extends IDateRange {
  id: string;
  name: string;
  position: string;
  location: string;
  url: string;
  highlights: string;
  summary: string;
}
