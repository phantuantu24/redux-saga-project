import { ThemeProvider, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import theme from '../../commons/Theme';
import TaskBoard from '../TaskBoard/TaskBoard';
import styles from './styles';
import configureStore from '../../redux/configureStore';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading/GlobalLoading';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <TaskBoard />
          <GlobalLoading />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
