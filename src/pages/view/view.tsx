import { Box, Container, Paper, styled } from '@mui/material';
import { Classic, NavBar } from 'src/components';

const PageContent = styled('div')`
  margin-top: 20px;
`;
const ContainerEl = styled(Container)``;
const PaperEl = styled(Paper)`
  padding: 8px;
`;

export const View = () => {
  return (
    <Box>
      <NavBar />
      <PageContent>
        <ContainerEl maxWidth="lg">
          <PaperEl>
            <Classic />
          </PaperEl>
        </ContainerEl>
      </PageContent>
    </Box>
  );
};
