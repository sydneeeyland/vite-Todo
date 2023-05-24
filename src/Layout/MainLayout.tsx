import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { Grid, Box, Button } from '@mui/material';

import { TodoServiceContext } from '../Context/TodoService';

function MainLayout() {
  const {
    SignedIn,
    handleShowCreateModal,
    handleShowSignInModal,
    handleLogOut,
  } = useContext(TodoServiceContext);

  return (
    <Box>
      <Grid container>
        <Grid item xl lg md xs={12}>
          <Box
            sx={{
              backgroundColor: '#2d333b',
              p: '10px',
              textAlign: 'end',
            }}
          >
            {SignedIn && (
              <Button
                variant="contained"
                sx={{ mr: 2 }}
                onClick={() => handleShowCreateModal(true)}
              >
                Create To do
              </Button>
            )}

            <Button
              variant="contained"
              onClick={() =>
                SignedIn ? handleLogOut() : handleShowSignInModal(true)
              }
            >
              {SignedIn ? 'Log Out' : 'Sign In'}
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
