import React, { Component } from 'react';
import { Box, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import TaskItem from '../TaskItem/TaskItem';

class TaskList extends Component {
  render() {
    const { classes, status, taskFilter } = this.props;
    return (
      <Grid key={status.value} item md={4} xs={12}>
        <Box mt={1} mb={2} className={classes.status}>
          {status.label}
        </Box>
        <div className={classes.wrapperListTask}>
          {taskFilter.map((task) => (
            <TaskItem key={task.id} task={task} status={status} />
          ))}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
