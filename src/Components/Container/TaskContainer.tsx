import { useContext } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { TodoServiceContext } from '../../Context/TodoService';

type Props = {
  data: {
    id: number;
    task: string;
    user: string;
  }[];
  boardType: string;
};

function TaskContainer({ data, boardType }: Props) {
  const { SignedIn, handleShowUpdateModal } = useContext(TodoServiceContext);
  return (
    <>
      {data.map(({ id, task, user }) => (
        <Box
          key={`${id}-${task}`}
          sx={{
            backgroundColor: '#2d333b',
            p: '10px',
            borderRadius: 1,
            mb: 1,
            cursor: 'pointer',
          }}
          onClick={() => SignedIn && handleShowUpdateModal(boardType, id)}
        >
          <Grid container>
            <Grid item xl lg md xs={12}>
              <Typography
                sx={{ inlineSize: '150px', overflowWrap: 'break-word' }}
              >
                {task}
              </Typography>
            </Grid>
            <Grid
              item
              xl
              lg
              md
              xs={12}
              alignItems="end"
              textAlign="end"
              fontWeight="bold"
            >
              {user}
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
}

export default TaskContainer;
