import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Fab,
  Grid,
  Icon,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <h3>{task.title}</h3>
            </Grid>
            <Grid item md={4}>
              <h3>{status.label}</h3>
            </Grid>
          </Grid>
          {task.description}
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            color="secondary"
            aria-label="Edit"
            size="small"
            className={classes.fab}
          >
            <Icon fontSize="small">edit</Icon>
          </Fab>
          <Fab
            color="secondary"
            aria-label="Edit"
            size="small"
            className={classes.fab}
          >
            <Icon fontSize="small">delete</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
