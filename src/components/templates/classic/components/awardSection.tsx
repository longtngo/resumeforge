import { Paper, styled } from '@mui/material';
import { IData } from 'src/types';
import { Section, SectionHeading } from './shared';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

type Props = {
  data: IData;
};

const CardContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-basis: 50%;
  gap: 16px;
`;

const SubSection = styled(Paper)`
  padding: 20px;
  min-width: 200px;
  font-size: 13px;
  position: relative;
`;
const SubSectionTitle = styled('h3')`
  font-size: 15px;
  text-transform: capitalize;
  margin: 0px;
`;

const AwardIcon = styled(EmojiEventsIcon)`
  position: absolute;
  left: 10px;
  top: 10px;
  color: ${({ theme }) => theme.palette.primary.main};
  opacity: 15%;
  width: 100px;
  height: 100px;
  transform: rotate(-20deg);
`;

export const AwardSection = ({ data: { awards } }: Props) => {
  if (!awards) return;
  return (
    <Section>
      <SectionHeading>Awards</SectionHeading>
      <CardContainer>
        {awards.map((item, idx) => (
          <SubSection key={idx}>
            <SubSectionTitle>{item.title}</SubSectionTitle>
            <AwardIcon />
            <div>
              <div>
                {item.awarder} - {item.date}
              </div>
              <div>{item.summary}</div>
            </div>
          </SubSection>
        ))}
      </CardContainer>
    </Section>
  );
};
