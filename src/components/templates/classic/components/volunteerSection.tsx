import { IData } from 'src/types';
import { Section, SectionHeading } from './shared';
import { WorkList } from './workList';

type Props = {
  data: IData;
};

export const VolunteerSection = ({ data: { volunteer } }: Props) => {
  if (!volunteer || !volunteer.length) return null;

  return (
    <Section>
      <SectionHeading>Volunteer</SectionHeading>
      <WorkList
        data={volunteer}
        inputDateFormat="YYYY-MM-DD"
        outputDateFormat="MMM YYYY"
      />
    </Section>
  );
};
