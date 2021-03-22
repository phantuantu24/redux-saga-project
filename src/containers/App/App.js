import React, { Component } from "react";
import { ThemeProvider, withStyles } from "@material-ui/core";
import styles from "./styles";
import TaskBoard from "../TaskBoard/TaskBoard";
import theme from "../../commons/Theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TaskBoard />
      </ThemeProvider>
    )
  }
}

export default withStyles(styles)(App)
