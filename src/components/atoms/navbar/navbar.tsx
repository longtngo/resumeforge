import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Resume Forge
        </Typography>
        <Button color="inherit">Upload</Button>
        <Button color="inherit">Download</Button>
        <Button color="inherit">Edit</Button>
      </Toolbar>
    </AppBar>
  );
};
