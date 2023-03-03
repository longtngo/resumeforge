import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import { styled } from '@mui/material';
import React from 'react';
import { IEducation } from 'src/types';
import { DateRange } from './dateRange';

type Props = {
  data: IEducation;
};

const Line = styled('div')``;

const StyledDot = styled(TimelineDot)`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Education = ({ data }: Props) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        <DateRange data={data} inputFormat="YYYY" outputFormat="YYYY" />
      </TimelineOppositeContent>
      <TimelineSeparator>
        <StyledDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Line>
          {data.major} - {data.level}
        </Line>
        <Line>
          <a href={data.url ? data.url : undefined}>{data.institution}</a>
        </Line>
        <Line>{data.score}</Line>
      </TimelineContent>
    </TimelineItem>
  );
};
