import { IActivity } from './activity';
import { IAward } from './award';
import { IBasic } from './basic';
import { IEducation } from './education';
import { IKills } from './skill';
import { IVolunteer } from './volunteer';
import { IWork } from './work';

export interface IData {
  basics?: IBasic;
  skills?: IKills;
  work?: IWork[];
  education?: IEducation[];
  activities?: IActivity;
  awards?: IAward[];
  volunteer?: IVolunteer[];
}
