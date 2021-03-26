import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Button, Grid, Icon } from '@material-ui/core';
import { STATUSES } from '../../constants'
import styles from './styles';
import TaskList from '../../components/TaskList/TaskList';
import TaskForm from '../../components/TaskForm/TaskForm';
import PropTypes from 'prop-types';

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

  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }


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

  handleCloseForm = () => {
    this.setState({
      open: false
    })
  }

  renderAddForm = () => {
    const { open } = this.state
    return <TaskForm
      open={open}
      onClose={this.handleCloseForm}
    />
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => this.setState({ open: true })}>
          <Icon>add</Icon>
          Add New Task
        </Button>
        <div className={classes.taskContent}>
          {this.renderBoard()}
        </div>
        {this.renderAddForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TaskBoard);