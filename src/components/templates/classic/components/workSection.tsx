import { IData } from 'src/types';
import { Section, SectionHeading } from './shared';
import { WorkList } from './workList';

type Props = {
  data: IData;
};

export const WorkSection = ({ data: { work } }: Props) => {
  if (!work) return null;
  return (
    <Section>
      <SectionHeading>Experience</SectionHeading>
      <WorkList data={work} />
    </Section>
  );
};
