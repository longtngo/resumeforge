import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  CssBaseline,
  Avatar,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import { ReactElement, useCallback, useState } from 'react';
import { useData } from 'src/hooks/useData';
import JsonURL from '@jsonurl/jsonurl';
import { IListItem, LeftDrawer } from './leftDrawer';
import { ShareDialog } from './shareDialog';
import { UploadDialog } from './uploadDialog';
import { saveAs } from 'file-saver';

type Props = {
  children: ReactElement;
};

export const NavBar = ({ children }: Props) => {
  const { data, setData } = useData();
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [shareUrl, setShareUrl] = useState<string>();

  const handleShareClose = useCallback(() => {
    setShowShareDialog(false);
    setShareUrl(undefined);
  }, []);

  const handleUploadClose = useCallback(() => {
    setShowFileUpload(false);
  }, []);

  const listItemData: IListItem[] = [
    {
      icon: <UploadIcon />,
      text: 'Upload',
      onClick: useCallback(() => {
        setShowFileUpload(true);
      }, []),
    },
    {
      icon: <DownloadIcon />,
      text: 'Download',
      onClick: useCallback(() => {
        const fileName = data?.basics?.name || 'template-data';
        const sanitizedFileName =
          fileName.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.json';
        saveAs(new Blob([JSON.stringify(data)]), sanitizedFileName);
      }, [data]),
    },
    {
      icon: <ShareIcon />,
      text: 'Share',
      onClick: useCallback(() => {
        if (!data) return;

        const encodedData = encodeURIComponent(JsonURL.stringify(data) || '');
        setShareUrl(window.location.origin + '?data=' + encodedData);
        setShowShareDialog(true);
      }, [data]),
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
      <LeftDrawer data={listItemData} />
      {children}
      <ShareDialog
        show={showShareDialog}
        onClose={handleShareClose}
        shareUrl={shareUrl}
      />
      <UploadDialog
        show={showFileUpload}
        onClose={handleUploadClose}
        onSubmit={setData}
      />
    </Box>
  );
};
