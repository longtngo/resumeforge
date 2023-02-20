import { styled } from '@mui/material';
import React from 'react';
import { ISkill } from 'src/types';
import { Skill } from './skill';

type Props = {
  data: ISkill[];
  maxLevel?: number;
};

const Container = styled('ul')`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

export const SkillList = ({ data, maxLevel }: Props) => {
  return (
    <Container>
      {data.map((item) => (
        <Skill key={item.name} data={item} maxLevel={maxLevel} />
      ))}
    </Container>
  );
};
