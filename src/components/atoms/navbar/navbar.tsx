import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';

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
        <Button color="inherit" title="Upload">
          <UploadIcon /> Upload
        </Button>
        <Button color="inherit" title="Download">
          <DownloadIcon /> Download
        </Button>
        <Button color="inherit" title="Edit">
          <EditIcon /> Edit
        </Button>
        <IconButton
          href="https://github.com/longtngo/resumeforge"
          color="inherit"
          title="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
