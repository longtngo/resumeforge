import React from 'react';
import { IDateRange } from 'src/types/common';
import { Line } from './shared';
import NorthIcon from '@mui/icons-material/North';
import { styled } from '@mui/material';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

type Props = {
  data: IDateRange;
  inputFormat?: string;
  outputFormat?: string;
};

export const defaultDateFormat = 'MMM YYYY';

const ArrowLine = styled(Line)`
  padding-right: 6px;
`;

export const DateRange = ({ data, inputFormat, outputFormat }: Props) => {
  const endDateValue = data.isCurrentlyHere
    ? 'now'
    : data.endDate
    ? inputFormat && outputFormat
      ? dayjs(data.endDate, inputFormat).format(outputFormat)
      : data.endDate
    : undefined;
  const hasEndDateValue = !!endDateValue;
  const startDate =
    inputFormat && outputFormat
      ? dayjs(data.startDate, inputFormat).format(outputFormat)
      : data.startDate;

  return (
    <>
      {hasEndDateValue && (
        <>
          <Line>{endDateValue}</Line>
          <ArrowLine>
            <NorthIcon />
          </ArrowLine>
        </>
      )}
      <Line>{startDate}</Line>
    </>
  );
};
