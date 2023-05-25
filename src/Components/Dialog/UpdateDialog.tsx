import { useState, useContext, useEffect } from 'react';

import { Button, TextField, Box, Typography, Grid } from '@mui/material';
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
import WrappingContainer from '../Container/WrappingContainer';

type Props = {
  open: boolean;
  handleClose: () => void;
};

function UpdateDialog({ open, handleClose }: Props) {
  const { updateData, handleUpdateTask, handleDeleteTask, userData } =
    useContext(TodoServiceContext);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [comment, setComment] = useState('');
  const [payload, setPayload] = useState(updateData);

  useEffect(() => {
    setPayload(updateData);
  }, [updateData]);

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
          if (comment !== '') {
            const initialComments: any = updateData.comments;
            initialComments.push(comment);
            setPayload((prev) => ({
              ...prev,
              comments: initialComments,
            }));
            handleUpdateTask(payload);
          }
        }}
      >
        <DialogTitle id="alert-dialog-title">Update</DialogTitle>
        <DialogContent>
          <Box mt={1}>
            <TextField
              label="Task Details"
              variant="outlined"
              defaultValue={updateData.task}
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
              <InputLabel id="update-assignee-label">Assignee</InputLabel>
              <Select
                labelId="update-assignee-label"
                id="update-assignee-select"
                value={selectedUser || updateData.user}
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
            <FormControl sx={{ mt: 1 }} fullWidth>
              <InputLabel id="update-status-label">Status</InputLabel>
              <Select
                labelId="update-status-label"
                id="update-status-select"
                label="Status"
                value={selectedStatus || updateData.status}
                onChange={(e) => {
                  setSelectedStatus(e.target.value);
                  setPayload((prev) => ({
                    ...prev,
                    status: e.target.value,
                  }));
                }}
              >
                <MenuItem value="backlog">Backlog</MenuItem>
                <MenuItem value="todo">To do</MenuItem>
                <MenuItem value="inprogress">In Progress</MenuItem>
                <MenuItem value="done">Done</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Typography mt={2} fontWeight="bold">
            Comments
          </Typography>
          <Box maxHeight="250px" sx={{ overflowY: 'auto' }}>
            {updateData.comments.length > 0 ? (
              updateData.comments.map((val, index) => (
                <Box
                  key={`${val}-${index}`}
                  sx={{
                    backgroundColor: '#dddcdc',
                    p: 1.5,
                    mt: 1,
                    borderRadius: 2,
                  }}
                >
                  <WrappingContainer>
                    <Grid item xl lg md xs={12}>
                      {val}
                    </Grid>
                  </WrappingContainer>
                </Box>
              ))
            ) : (
              <Typography textAlign="center">No Comments</Typography>
            )}
          </Box>
          <Box mt={2}>
            <TextField
              label="Broadcast your concern"
              variant="outlined"
              multiline
              fullWidth
              rows={4}
              onChange={(e) => {
                if (e.target.value !== '') {
                  setComment(`${e.target.value} - ${userData}`);
                } else {
                  setComment('');
                }
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            autoFocus
            size="small"
            sx={{ color: 'red' }}
            onClick={() => handleDeleteTask()}
          >
            Delete
          </Button>
          <Button type="submit" autoFocus>
            Update
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default UpdateDialog;
