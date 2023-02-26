import { styled } from '@mui/material';
import React from 'react';
import { IBasicLocation } from 'src/types';

type Props = {
  data: IBasicLocation;
};

const Container = styled('div')`
  & > span:not(:last-child)::after {
    content: ', ';
  }
`;
const AddressLine1 = styled('span')``;
const AddressLine2 = styled('span')``;
const CityState = styled('span')``;
const ZipCode = styled('span')``;

export const Location = ({ data }: Props) => {
  if (!data) return null;
  return (
    <Container>
      {!!data.addressLine1 && <AddressLine1>{data.addressLine1}</AddressLine1>}
      {!!data.addressLine2 && <AddressLine2>{data.addressLine2}</AddressLine2>}
      <CityState>
        {data.city} {data.state}
      </CityState>
      {!!data.zipCode && <ZipCode>{data.zipCode}</ZipCode>}
    </Container>
  );
};
