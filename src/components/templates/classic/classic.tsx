import {
  ActivitySection,
  AwardSection,
  BasicSection,
  EducationSection,
  SkillSection,
  VolunteerSection,
  WorkSection,
} from './components';
import data from '../data.json';
import { styled } from '@mui/material';

const Container = styled('main')`
  padding: 16px;
`;

const sectionMap = {
  basics: BasicSection,
  skills: SkillSection,
  work: WorkSection,
  education: EducationSection,
  activities: ActivitySection,
  volunteer: VolunteerSection,
  awards: AwardSection,
};

export const Classic = () => {
  return (
    <Container>
      {Object.keys(data).map((key) => {
        const _key = key as keyof typeof sectionMap;
        const Section = sectionMap[_key];

        if (!Section) return null;

        return <Section key={key} data={data} />;
      })}
    </Container>
  );
};
