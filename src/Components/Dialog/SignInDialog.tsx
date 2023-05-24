import { useState, useContext } from 'react';

import { Button, TextField, Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { TodoServiceContext } from '../../Context/TodoService';

type Props = {
  open: boolean;
  handleClose: () => void;
};

function SignInDialog({ open, handleClose }: Props) {
  const { handleSignIn } = useContext(TodoServiceContext);
  const [payload, setPayload] = useState({
    username: '',
    password: '',
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      fullWidth
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn(payload);
        }}
      >
        <DialogTitle id="alert-dialog-title">Account Details</DialogTitle>
        <DialogContent>
          <Box mt={1}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              onChange={(e) => {
                setPayload((prev) => ({
                  ...prev,
                  username: e.target.value,
                }));
              }}
            />
          </Box>
          <Box mt={1}>
            {' '}
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              onChange={(e) => {
                setPayload((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button type="submit" autoFocus>
            Sign In
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default SignInDialog;
