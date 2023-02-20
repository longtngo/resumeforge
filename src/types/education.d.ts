import { IDateRange } from './common';

export interface IEducation extends IDateRange {
  id: string;
  institution: string;
  url: string;
  level: string;
  major: string;
  score: string;
  courses: string[];
}
