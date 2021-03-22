import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

class App extends Component {
  render() {
    const { classes } = this.props
    console.log(this.props)
    return (
      <div>
        <h2>Redux Saga Project</h2>
        <Button variant="contained" color="primary">Hello</Button>
        <div className={classes.box}>
          <div className={classes.shape}>ReactJS</div>
          <div className={classes.shape}>AngularJS</div>
          <div className={classes.shape}>VueJS</div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App)
