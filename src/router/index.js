import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, Switch, Route} from 'react-router-dom';
import { Main } from '../containers';

const defaultProps = {
  history: {},
};

const propTypes = {
  history: PropTypes.shape({}),
};

const Router = ({
  history,
}) => {
  return (
    <Switch>
      <Main history={history} />
    </Switch>
  );
};

Router.defaultProps = defaultProps;
Router.propTypes = propTypes;

export default withRouter(Router);
