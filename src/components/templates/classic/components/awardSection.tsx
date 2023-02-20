import { Card, CardContent, CardHeader, styled } from '@mui/material';
import { IData } from 'src/types';
import { Section, SectionHeading } from './shared';

type Props = {
  data: IData;
};

const CardContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-basis: 50%;
  gap: 16px;
`;

export const AwardSection = ({ data: { awards } }: Props) => {
  return (
    <Section>
      <SectionHeading>Awards</SectionHeading>
      <CardContainer>
        {awards.map((item, idx) => (
          <Card key={idx}>
            <CardHeader title={item.title} />
            <CardContent>
              <div>{item.date}</div>
              <div>{item.awarder}</div>
              <div>{item.summary}</div>
            </CardContent>
          </Card>
        ))}
      </CardContainer>
    </Section>
  );
};
