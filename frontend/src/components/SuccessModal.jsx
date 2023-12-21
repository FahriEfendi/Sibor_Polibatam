import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function SuccessModal({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Pengajuan Berhasil Dibuat</DialogTitle>
      <DialogContent>
        Pengajuan Anda telah berhasil dibuat.
      </DialogContent>
      <Button onClick={handleClose} color="primary">
        Tutup
      </Button>
    </Dialog>
  );
}

export default SuccessModal;
