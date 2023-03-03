import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { styled } from '@mui/material';
import { IWork } from 'src/types';
import { DateRange } from './dateRange';
import { Line } from './shared';

type Props = {
  data: IWork;
  inputDateFormat?: string;
  outputDateFormat?: string;
};

const Position = styled('h3')`
  font-weight: bold;
  margin: 0px;
`;
const CompanyLine = styled(Line)`
  & :not(:first-child)::before {
    content: '•';
    margin-left: 4px;
    margin-right: 4px;
    font-style: normal;
    font-weight: bold;
  }
`;

const Company = styled('a')``;
const CompanyLocation = styled('span')`
  font-style: italic;
`;

const HighlightHeading = styled('h4')`
  font-weight: bold;
  font-style: italic;
  margin: 0px;
`;

const StyledDot = styled(TimelineDot)`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Work = ({ data, inputDateFormat, outputDateFormat }: Props) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        <DateRange
          data={data}
          inputFormat={inputDateFormat}
          outputFormat={outputDateFormat}
        />
      </TimelineOppositeContent>
      <TimelineSeparator>
        <StyledDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Position>{data.position}</Position>
        <CompanyLine>
          <Company href={data.url ? data.url : undefined}>{data.name}</Company>
          {!!data.location && (
            <CompanyLocation>{data.location}</CompanyLocation>
          )}
        </CompanyLine>
        <Line dangerouslySetInnerHTML={{ __html: data.summary }}></Line>
        {!!data.highlights && (
          <>
            <HighlightHeading>Highlights</HighlightHeading>
            <Line dangerouslySetInnerHTML={{ __html: data.highlights }}></Line>
          </>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};
