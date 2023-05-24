import { useContext } from 'react';

import { Grid } from '@mui/material';
import CustomContainer from '../Components/Container/CustomContainer';
import TaskContainer from '../Components/Container/TaskContainer';
import WrappingContainer from '../Components/Container/WrappingContainer';

import { TodoServiceContext } from '../Context/TodoService';

function Home() {
  const { mockData } = useContext(TodoServiceContext);

  return (
    <WrappingContainer>
      {/* Backlog */}
      <Grid item xl lg md xs={12} m={[1, 2]}>
        <CustomContainer
          title="Backlog"
          description="This item hasn't been finalized"
        >
          <TaskContainer data={mockData.backlog} boardType="backlog" />
        </CustomContainer>
      </Grid>

      {/* To do */}
      <Grid item xl lg md xs={12} m={[1, 2]}>
        <CustomContainer
          title="To do"
          description="This item hasn't been started"
        >
          <TaskContainer data={mockData.todo} boardType="todo" />
        </CustomContainer>
      </Grid>

      {/* In Progress */}
      <Grid item xl lg md xs={12} m={[1, 2]}>
        <CustomContainer
          title="In Progress"
          description="This is actively being worked on"
        >
          <TaskContainer data={mockData.inprogress} boardType="inprogress" />
        </CustomContainer>
      </Grid>

      {/* Done */}
      <Grid item xl lg md xs={12} m={[1, 2]}>
        <CustomContainer
          title="Done"
          description="This has been completed"
          count={3}
        >
          <TaskContainer data={mockData.done} boardType="done" />
        </CustomContainer>
      </Grid>
    </WrappingContainer>
  );
}

export default Home;
