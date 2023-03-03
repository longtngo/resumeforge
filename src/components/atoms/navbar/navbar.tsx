import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
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
import JsonURL from '@jsonurl/jsonurl';
import { LeftDrawer } from './leftDrawer';
import { ShareDialog } from './shareDialog';
import { UploadDialog } from './uploadDialog';
import { saveAs } from 'file-saver';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CircleIcon from '@mui/icons-material/Circle';
import ColorizeIcon from '@mui/icons-material/Colorize';
import { blue, green, red } from '@mui/material/colors';
import { IListItem } from './sidebarItem';
import { useThemeColor } from 'src/hooks/useTheme';

type Props = {
  children: ReactElement;
};

const RedCircle = styled(CircleIcon)`
  color: ${red[500]};
`;
const GreenCircle = styled(CircleIcon)`
  color: ${green[500]};
`;
const BlueCircle = styled(CircleIcon)`
  color: ${blue[500]};
`;

export const NavBar = ({ children }: Props) => {
  const { setColor } = useThemeColor();
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
    {
      icon: <ColorLensIcon />,
      text: 'Theme Color',
      subItems: [
        {
          icon: <RedCircle />,
          text: 'Red',
          onClick: useCallback(() => {
            setColor(red[500]);
          }, [setColor]),
        },
        {
          icon: <GreenCircle />,
          text: 'Green',
          onClick: useCallback(() => {
            setColor(green[500]);
          }, [setColor]),
        },
        {
          icon: <BlueCircle />,
          text: 'Blue',
          onClick: useCallback(() => {
            setColor(blue[500]);
          }, [setColor]),
        },
        {
          icon: <ColorizeIcon />,
          text: 'Pick a color',
          onClick: useCallback(() => {
            alert('hello');
          }, []),
        },
      ],
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
