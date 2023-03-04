import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  styled,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useData } from 'src/hooks/useData';
import { compress } from 'src/utilities/compression';

type Props = {
  show: boolean;
  onClose: () => void;
};

const TextAreaEl = styled('textarea')`
  width: 100%;
`;

const CheckedIcon = styled(CheckCircleIcon)`
  margin-left: 8px;
`;

export const ShareDialog = ({
  show: showShareDialog,
  onClose: handleClose,
}: Props) => {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState<string>();
  const { data } = useData();

  useEffect(() => {
    const generateShareUrl = async () => {
      const encodedData = await compress(data);

      setShareUrl(window.location.origin + '?data=' + encodedData);
    };

    generateShareUrl();
  }, [data]);

  const handleCopyToClipboard = useCallback(() => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }, [shareUrl]);

  return (
    <Dialog
      open={showShareDialog}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>Share</DialogTitle>
      <DialogContent>
        <TextAreaEl
          rows={10}
          value={shareUrl ?? 'generating...'}
          readOnly
        ></TextAreaEl>
        <Button
          onClick={handleCopyToClipboard}
          color={copied ? 'success' : undefined}
          disabled={!shareUrl}
        >
          Copy to Clipboard
          {copied && <CheckedIcon />}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
