import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from '@mui/material';
import React, { MouseEventHandler, ReactElement, ReactNode } from 'react';

export type IListItem = {
  id: string;
  icon?: ReactElement;
  text: ReactNode;
  secondary?: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
  subItems?: IListItem[];
};

export const SideBarItem = ({ itemData }: { itemData: IListItem }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const hasSubItems = (itemData.subItems?.length || 0) > 0;

  const item = (
    <ListItem
      key={itemData.id}
      disablePadding
      onClick={hasSubItems ? handleClick : undefined}
    >
      <ListItemButton>
        {!!itemData.icon && <ListItemIcon>{itemData.icon}</ListItemIcon>}
        <ListItemText
          primary={itemData.text}
          secondary={itemData.secondary}
          onClick={hasSubItems ? undefined : itemData.onClick}
        />
        {hasSubItems && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
    </ListItem>
  );

  if (!hasSubItems) return item;

  return (
    <>
      {item}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ paddingLeft: 3 }}>
          {itemData.subItems?.map((subItem) => (
            <SideBarItem key={subItem.id} itemData={subItem} />
          ))}
        </List>
      </Collapse>
    </>
  );
};
