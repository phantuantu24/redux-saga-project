import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import { Button, Grid } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { STATUSES } from '../../constants'
import styles from "./styles";
import TaskList from '../../components/TaskList/TaskList';

const listTask = [
  {
    id: 1,
    title: "Read Book",
    description: "Read material UI book",
    status: 0
  },
  {
    id: 2,
    title: "Play FootBall",
    description: "With my friend",
    status: 2
  },
  {
    id: 3,
    title: "Play game",
    description: "",
    status: 1
  }
]
class TaskBoard extends Component {

  renderBoard = () => {
    return (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFilter = listTask.filter(task => task.status === status.value)
          return <TaskList 
            key={status.value}
            status={status} 
            taskFilter={taskFilter}
          />
        })}
      </Grid>
    )
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.taskBoard}>
        <Button variant="contained" color="secondary">
          <AddIcon />
          Add New Task
        </Button>
        <div className={classes.taskContent}>
          {this.renderBoard()}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TaskBoard);