import { styled } from '@mui/material';
import { IData } from 'src/types';
import { Location } from './location';
import { ProfileList } from './profileList';
import { Section, SectionHeading } from './shared';

type Props = {
  data: IData;
};

const Container = styled('div')``;
const Name = styled('h1')`
  margin-top: 0px;
  margin-bottom: 8px;
`;
const Label = styled('div')``;
const Email = styled('a')`
  text-decoration: none;
  &::before {
    content: '📧';
    margin-right: 5px;
  }
`;
const Phone = styled('span')`
  &::before {
    content: '📱:';
  }
`;
const Url = styled('a')``;
const Summary = styled('div')``;
const RelevantExp = styled('div')``;
const TotalExp = styled('div')``;
const Objective = styled('div')``;

const Heading = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeadingGroupLeft = styled('div')`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  /* gap: 8px; */
`;

const HeadingGroupRight = styled('div')`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  /* gap: 8px; */
`;

export const BasicSection = ({ data: { basics } }: Props) => {
  return (
    <Container>
      <Name>{basics.name}</Name>
      {/* <Label>{data.label}</Label> */}
      <Heading>
        <HeadingGroupLeft>
          <Location data={basics.location} />
          <ProfileList data={basics.profiles} />
        </HeadingGroupLeft>
        <HeadingGroupRight>
          <Phone>{basics.phone}</Phone>
          <Email href={`email:${basics.email}`}>{basics.email}</Email>
          <Url href={basics.url}>{basics.url}</Url>
        </HeadingGroupRight>
      </Heading>
      <Section>
        <SectionHeading>Summary</SectionHeading>
        <Summary>{basics.summary}</Summary>
      </Section>

      <Section>
        <SectionHeading>Objective</SectionHeading>
        <Objective>{basics.objective}</Objective>
      </Section>
      {/* <RelevantExp>{data.relExp}</RelevantExp>
      <TotalExp>{data.totalExp}</TotalExp> */}
    </Container>
  );
};
