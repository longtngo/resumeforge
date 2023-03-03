import { styled } from '@mui/material';
import React from 'react';

type Props = {
  level: number;
  maxLevel: number;
};

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  transform: skew(-42deg);
`;

const Bar = styled('div')<{ $fill: boolean }>`
  border: ${({ theme, $fill }) =>
    $fill ? 'none' : `1px solid ${theme.palette.grey[400]}`};
  flex-grow: 1;
  background-color: ${({ theme, $fill }) =>
    $fill ? theme.palette.primary.main : 'white'};
  height: 6px;
  width: 20px;
`;

export const SkillBar = ({ level, maxLevel }: Props) => {
  const scaled = Math.floor((level * 100) / maxLevel / 20);
  return (
    <Container>
      {Array(5)
        .fill(1)
        .map((_, idx) => (
          <Bar key={idx} $fill={idx < scaled}>
            &nbsp;
          </Bar>
        ))}
    </Container>
  );
};
