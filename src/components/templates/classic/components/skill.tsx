import { styled } from '@mui/material';
import { SkillBar } from 'src/components/atoms';
import { ISkill } from 'src/types';

type Props = {
  data: ISkill;
  maxLevel?: number;
};

const Container = styled('li')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Name = styled('div')``;

export const Skill = ({ data: { name, level, text, maxLevel = 5 } }: Props) => {
  const value = Math.round((level / maxLevel) * 100);
  return (
    <Container>
      <Name>{name}</Name>
      <Row>
        <SkillBar level={level} maxLevel={maxLevel} />
        {text ? text : `${value}%`}
      </Row>
    </Container>
  );
};
