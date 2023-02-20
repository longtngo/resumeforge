import { Timeline, timelineOppositeContentClasses } from '@mui/lab';
import { IData } from 'src/types';
import { Education } from './education';
import { Section, SectionHeading } from './shared';

type Props = {
  data: IData;
};

export const EducationSection = ({ data: { education } }: Props) => {
  return (
    <Section>
      <SectionHeading>Education</SectionHeading>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.15,
          },
        }}
      >
        {education.map((item, idx) => (
          <Education key={idx} data={item} />
        ))}
      </Timeline>
    </Section>
  );
};
