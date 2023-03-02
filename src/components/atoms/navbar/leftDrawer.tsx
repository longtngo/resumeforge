import {
  Drawer,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { ReactElement } from 'react';

const drawerWidth = 240;

export type IListItem = {
  icon: ReactElement;
  text: string;
  onClick: () => void;
};

type Props = {
  data: IListItem[];
};

export const LeftDrawer = ({ data }: Props) => {
  return (
    <Drawer
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
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                {!!item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText primary={item.text} onClick={item.onClick} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
