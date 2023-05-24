import { useState, useContext } from 'react';

import { Button, TextField, Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { TodoServiceContext } from '../../Context/TodoService';

import { Users } from '../../Constant/Common';

type Props = {
  open: boolean;
  handleClose: () => void;
};

function CreateDialog({ open, handleClose }: Props) {
  const { handleCreateTask } = useContext(TodoServiceContext);
  const [selectedUser, setSelectedUser] = useState('');
  const [payload, setPayload] = useState({
    id: 0,
    task: '',
    user: '',
    status: 'Backlog',
    comments: [],
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
          handleCreateTask(payload);
        }}
      >
        <DialogTitle id="alert-dialog-title">To do</DialogTitle>
        <DialogContent>
          <Box mt={1}>
            <TextField
              label="Task Details"
              variant="outlined"
              multiline
              fullWidth
              rows={4}
              onChange={(e) =>
                setPayload((prev) => ({
                  ...prev,
                  id: Math.floor(Math.random() * 10000),
                  task: e.target.value,
                }))
              }
            />
            <FormControl sx={{ mt: 1 }} fullWidth>
              <InputLabel id="demo-simple-select-label">Assignee</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedUser}
                label="Assignee"
                onChange={(e) => {
                  setPayload((prev) => ({
                    ...prev,
                    user: e.target.value,
                  }));
                  setSelectedUser(e.target.value);
                }}
              >
                {Users.map((key) => (
                  <MenuItem key={key.id} value={key.name}>
                    {key.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button type="submit" autoFocus>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default CreateDialog;
