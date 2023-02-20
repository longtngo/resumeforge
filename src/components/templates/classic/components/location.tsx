import { styled } from '@mui/material';
import React from 'react';
import { IBasicLocation } from 'src/types';

type Props = {
  data: IBasicLocation;
};

const Container = styled('div')``;
const AddressLine1 = styled('span')``;
const AddressLine2 = styled('span')``;
const City = styled('span')``;
const State = styled('span')``;
const ZipCode = styled('span')``;

export const Location = ({ data }: Props) => {
  return (
    <Container>
      <AddressLine1>{data.addressLine1}</AddressLine1>,{' '}
      <AddressLine2>{data.addressLine2}</AddressLine2>, <City>{data.city}</City>
      <State>{data.state}</State>, <ZipCode>{data.zipCode}</ZipCode>
    </Container>
  );
};
