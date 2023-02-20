import { styled } from '@mui/material';
import { IData } from 'src/types';
import { Section, SectionHeading } from './shared';

type Props = {
  data: IData;
};

const SubSection = styled('div')``;
const SubSectionHeading = styled('h3')`
  text-transform: capitalize;
  margin: 0px;
`;
const SubSectionContent = styled('div')``;
export const ActivitySection = ({ data: { activities } }: Props) => {
  if (!activities || Object.keys(activities).length === 0) return null;
  return (
    <Section>
      <SectionHeading>Activities</SectionHeading>
      {Object.entries(activities)
        .filter(([, value]) => !!value)
        .map(([key, value]) => (
          <SubSection key={key}>
            <SubSectionHeading>{key}</SubSectionHeading>
            <SubSectionContent
              dangerouslySetInnerHTML={{ __html: value }}
            ></SubSectionContent>
          </SubSection>
        ))}
    </Section>
  );
};
