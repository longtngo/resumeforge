import { Box, Container, Paper, styled } from '@mui/material';
import { Classic, NavBar } from 'src/components';

const PageContent = styled('main')`
  margin-top: 85px;
`;
const ContainerEl = styled(Container)``;
const PaperEl = styled(Paper)`
  padding: 16px;
`;

export const View = () => {
  return (
    <NavBar>
      <PageContent>
        <ContainerEl maxWidth="lg">
          <PaperEl>
            <Classic />
          </PaperEl>
        </ContainerEl>
      </PageContent>
    </NavBar>
  );
};
