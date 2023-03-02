import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';
import { IData } from 'src/types';

type Props = {
  show: boolean;
  onClose: () => void;
  onSubmit: (data: IData) => void;
};

export const UploadDialog = ({ show, onClose, onSubmit }: Props) => {
  const [file, setFile] = useState<File>();

  const handleFileSelected = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        setFile(event.target.files[0]);
      }
    },
    []
  );

  const handleSubmit = useCallback(async () => {
    if (!file) return;

    const text = await file.text();

    try {
      const data = JSON.parse(text);

      onSubmit(data);
      onClose();
    } catch (e) {
      alert('Bad data');
    }
  }, [file, onClose, onSubmit]);

  return (
    <Dialog open={show} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Upload data</DialogTitle>
      <DialogContent>
        <Button variant="contained" component="label">
          Select File
          <input
            type="file"
            hidden
            accept="application/json"
            onChange={handleFileSelected}
          />
        </Button>
        <div>{file && `${file.name} - ${file.type}`}</div>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!file}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};
