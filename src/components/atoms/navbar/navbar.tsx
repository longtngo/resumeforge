import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  CssBaseline,
  Avatar,
  Popover,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import { ReactElement, useCallback, useState, MouseEvent } from 'react';
import { useData } from 'src/hooks/useData';
import { LeftDrawer } from '../leftDrawer/leftDrawer';
import { ShareDialog } from './shareDialog';
import { UploadDialog } from './uploadDialog';
import { saveAs } from 'file-saver';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { IListItem } from './sidebarItem';
import { useThemeColor } from 'src/hooks/useTheme';
import { ColorChangeHandler, TwitterPicker } from 'react-color';
import PrintIcon from '@mui/icons-material/Print';
import printJS from 'print-js';

type Props = {
  children: ReactElement;
};

export const NavBar = ({ children }: Props) => {
  const { color, setColor } = useThemeColor();
  const { data, setData } = useData();
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleShareClose = useCallback(() => {
    setShowShareDialog(false);
  }, []);

  const handleUploadClose = useCallback(() => {
    setShowFileUpload(false);
  }, []);

  const handleColorPickerClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleChangeColor: ColorChangeHandler = useCallback(
    (color) => {
      setColor(color.hex);
    },
    [setColor]
  );

  const listItemData: IListItem[] = [
    {
      id: 'upload-json',
      icon: <UploadIcon />,
      text: 'Upload JSON',
      onClick: useCallback(() => {
        setShowFileUpload(true);
      }, []),
    },
    {
      id: 'download-json',
      icon: <DownloadIcon />,
      text: 'Download JSON',
      onClick: useCallback(() => {
        const fileName = data?.basics?.name || 'template-data';
        const sanitizedFileName =
          fileName.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.json';
        saveAs(new Blob([JSON.stringify(data)]), sanitizedFileName);
      }, [data]),
    },
    {
      id: 'print',
      icon: <PrintIcon />,
      text: 'Print',
      onClick: useCallback(async () => {
        const mainEl = document.getElementById('main');
        if (!mainEl) return;

        const styledEl = document.querySelector('style[data-styled="active"]');
        if (!styledEl) return;

        printJS({
          printable: mainEl.innerHTML,
          type: 'raw-html',
          header: '',
          style: styledEl.innerHTML,
        });
      }, []),
    },
    {
      id: 'share',
      icon: <ShareIcon />,
      text: 'Share',
      onClick: useCallback(() => {
        if (!data) return;

        setShowShareDialog(true);
      }, [data]),
    },
    {
      id: 'theme-color',
      icon: <ColorLensIcon style={{ color }} />,
      text: 'Theme Color',
      secondary: <span style={{ color }}>{color}</span>,
      onClick: useCallback((event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      }, []),
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        id="nav"
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
      {showShareDialog && <ShareDialog show onClose={handleShareClose} />}
      <UploadDialog
        show={showFileUpload}
        onClose={handleUploadClose}
        onSubmit={setData}
      />
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleColorPickerClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <TwitterPicker color={color} onChangeComplete={handleChangeColor} />
      </Popover>
    </Box>
  );
};
