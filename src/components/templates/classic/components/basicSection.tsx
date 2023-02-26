import { styled, Avatar } from '@mui/material';
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
`;

const HeadingGroupRight = styled('div')`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
`;

const AvatarEl = styled(Avatar)`
  width: 110px;
  height: 110px;
`;

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

const Column = styled(Row)`
  flex-direction: column;
  gap: 0px;
`;

export const BasicSection = ({ data: { basics } }: Props) => {
  return (
    <Container>
      <Heading>
        <HeadingGroupLeft>
          <Row>
            {!!basics.image && <AvatarEl src={basics.image} sizes="lg" />}
            <Column>
              <Name>{basics.name}</Name>
              <Label>{basics.label}</Label>
              <Location data={basics.location} />
              <ProfileList data={basics.profiles} />
            </Column>
          </Row>
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
    </Container>
  );
};
