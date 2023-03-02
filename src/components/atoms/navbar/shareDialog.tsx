import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  styled,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type Props = {
  show: boolean;
  onClose: () => void;
  shareUrl?: string;
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
  shareUrl,
}: Props) => {
  const [copied, setCopied] = useState(false);
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
  );
};
