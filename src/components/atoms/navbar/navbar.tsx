import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Avatar,
  styled,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import { ReactElement, useCallback, useState } from 'react';
import { useData } from 'src/hooks/useData';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import JsonURL from '@jsonurl/jsonurl';

const drawerWidth = 240;

type Props = {
  children: ReactElement;
};

const TextAreaEl = styled('textarea')`
  width: 100%;
`;

const CheckedIcon = styled(CheckCircleIcon)`
  margin-left: 8px;
`;

export const NavBar = ({ children }: Props) => {
  const data = useData();
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [shareUrl, setShareUrl] = useState<string>();
  const [copied, setCopied] = useState(false);

  const handleClose = useCallback(() => {
    setShowShareDialog(false);
    setShareUrl(undefined);
  }, []);

  const handleCopyToClipboard = useCallback(() => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }, [shareUrl]);

  const listItemData = [
    {
      icon: <UploadIcon />,
      text: 'Upload',
      onClick: () => {
        // TODO
      },
    },
    {
      icon: <DownloadIcon />,
      text: 'Download',
      onClick: () => {
        // TODO
      },
    },
    {
      icon: <ShareIcon />,
      text: 'Share',
      onClick: () => {
        if (!data) return;

        const encodedData = encodeURIComponent(JsonURL.stringify(data) || '');
        setShareUrl(window.location.origin + '?data=' + encodedData);
        setShowShareDialog(true);
      },
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Avatar>RF</Avatar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 3 }}>
            Resume Forge
          </Typography>
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
            {listItemData.map((item) => (
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
      {children}
      <Dialog
        open={showShareDialog}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>Share</DialogTitle>
        <DialogContent>
          <TextAreaEl rows={5} defaultValue={shareUrl} readOnly></TextAreaEl>
          <Button
            onClick={handleCopyToClipboard}
            color={copied ? 'success' : undefined}
          >
            Copy to Clipboard
            {copied && <CheckedIcon />}
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
