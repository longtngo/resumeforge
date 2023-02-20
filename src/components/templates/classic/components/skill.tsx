import { CircularProgress, styled } from '@mui/material';
import { ISkill } from 'src/types';

type Props = {
  data: ISkill;
  maxLevel?: number;
};

const Container = styled('li')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 8px;
`;

const Name = styled('div')``;

export const Skill = ({ data: { name, level }, maxLevel = 5 }: Props) => {
  const value = Math.round((level / maxLevel) * 100);
  return (
    <Container>
      <Name>{name}</Name>
      <CircularProgress
        variant="determinate"
        value={value}
        size={20}
        thickness={12}
      />
      {value}%
    </Container>
  );
};
