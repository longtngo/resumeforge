import { Drawer, Toolbar, Box, List } from '@mui/material';
import { IListItem, SideBarItem } from '../navbar/sidebarItem';

const drawerWidth = 240;

type Props = {
  data: IListItem[];
};

export const LeftDrawer = ({ data }: Props) => {
  return (
    <Drawer
      id="sideDrawer"
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {data.map((item) => (
            <SideBarItem key={item.id} itemData={item} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
