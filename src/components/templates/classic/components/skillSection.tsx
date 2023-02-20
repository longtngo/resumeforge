import { Paper, styled } from '@mui/material';
import React from 'react';
import { IData, IKills } from 'src/types';
import { Section, SectionHeading } from './shared';
import { SkillList } from './skillList';

type Props = {
  data: IData;
};

const SubSectionContainer = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
`;

const SubSection = styled(Paper)`
  padding: 8px;
  min-width: 200px;
`;
const SubSectionTitle = styled('h3')`
  text-transform: capitalize;
  margin: 0px;
`;

const oneHundredSkills = ['languages', 'frameworks'];

export const SkillSection = ({ data: { skills } }: Props) => {
  return (
    <Section>
      <SectionHeading>Technical Proficiency</SectionHeading>
      <SubSectionContainer>
        {Object.entries(skills).map(([key, value]) => (
          <SubSection key={key}>
            <SubSectionTitle>{key}</SubSectionTitle>
            <SkillList
              data={value}
              maxLevel={oneHundredSkills.includes(key) ? 100 : undefined}
            />
          </SubSection>
        ))}
      </SubSectionContainer>
    </Section>
  );
};
