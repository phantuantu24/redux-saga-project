import { Box, Button, Grid, Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskList from '../../components/TaskList/TaskList';
import { STATUSES } from '../../constants';
import styles from './styles';

class TaskBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    const { taskActionCreators } = this.props;
    taskActionCreators.fetchListTask();
  }

  renderBoard = () => {
    let result = null;
    const { listTask } = this.props;
    result = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFilter = listTask.filter(
            (task) => task.status === status.value,
          );
          return (
            <TaskList
              key={status.value}
              status={status}
              taskFilter={taskFilter}
            />
          );
        })}
      </Grid>
    );
    return result;
  };

  handleCloseForm = () => {
    this.setState({
      open: false,
    });
  };

  renderAddForm = () => {
    const { open } = this.state;
    return <TaskForm open={open} onClose={this.handleCloseForm} />;
  };

  showToast = () => {
    toast.success('successfully');
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => this.setState({ open: true })}
        >
          <Icon>add</Icon>
          Add New Task
        </Button>
        <Box ml="1">
          <Button variant="contained" color="primary" onClick={this.showToast}>
            Display Toast
          </Button>
        </Box>
        <div className={classes.taskContent}>{this.renderBoard()}</div>
        {this.renderAddForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object.isRequired,
  listTask: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  listTask: state.task.listTask,
});

const mapDispatchToProps = (dispatch) => ({
  taskActionCreators: bindActionCreators(taskActions, dispatch),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard),
);
