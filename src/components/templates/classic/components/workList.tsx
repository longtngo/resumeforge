import { Timeline, timelineOppositeContentClasses } from '@mui/lab';
import { styled } from '@mui/material';
import { IWork } from 'src/types';
import { Work } from './work';

type Props = {
  data: IWork[];
  inputDateFormat?: string;
  outputDateFormat?: string;
};

const TimelineEl = styled(Timeline)`
  & ${`.${timelineOppositeContentClasses.root}`} {
    flex: 0.15;
  }
`;

export const WorkList = ({
  data,
  inputDateFormat,
  outputDateFormat,
}: Props) => {
  return (
    <TimelineEl>
      {data.map((item, idx) => (
        <Work
          key={idx}
          data={item}
          inputDateFormat={inputDateFormat}
          outputDateFormat={outputDateFormat}
        />
      ))}
    </TimelineEl>
  );
};
