import React, { Component } from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import App from './app';
import Home from './pages/home';
import Login from './pages/login';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="/home"></IndexRedirect>
          <Route path="/home" component={Home}></Route>
        </Route>
        <Route path="/login" component={Login}></Route>
      </Router>
    );
  }
}

export default Routes;
