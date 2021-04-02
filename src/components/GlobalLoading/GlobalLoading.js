import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import LoadingIcon from '../../assets/images/Loading.gif';
import styles from './styles';

class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let result = null;
    if (showLoading) {
      result = (
        <div className={classes.globalLoading}>
          <img src={LoadingIcon} alt="loading" className={classes.icon} />
        </div>
      );
    }
    return result;
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.object.isRequired,
  showLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  showLoading: state.ui.showLoading,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
