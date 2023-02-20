import { styled } from '@mui/material';
import React from 'react';
import { IBasicProfile } from 'src/types';
import { Profile } from './profile';

type Props = {
  data: IBasicProfile[];
};

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const ProfileList = ({ data }: Props) => {
  return (
    <Container>
      {data.map((item, idx) => (
        <Profile key={idx} data={item} />
      ))}
    </Container>
  );
};
