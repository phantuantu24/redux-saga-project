import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import styles from './styles';

class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please input all required field.
          </DialogContentText>
          <TextField
            id="outlined-textarea"
            label="Task Name"
            placeholder="Input Task Name"
            multiline
            variant="outlined"
            className={classes.textField}
          />
          <br />
          <TextField
            id="outlined-textarea"
            label="Description"
            placeholder="Input Description"
            multiline
            rows={3}
            variant="outlined"
            className={classes.textField}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
