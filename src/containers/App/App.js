import { ThemeProvider, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import theme from '../../commons/Theme';
import TaskBoard from '../TaskBoard/TaskBoard';
import styles from './styles';
import configureStore from '../../redux/configureStore';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <TaskBoard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
