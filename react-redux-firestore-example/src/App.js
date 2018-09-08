import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './components/layout/NotFound';
import Settings from './components/settings/Settings';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import EditClient from './components/clients/EditClient';
import ClientDetails from './components/clients/ClientDetails';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={UserIsAuthenticated(Dashboard)} />
            <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
            <Route exact path="/register" component={UserIsNotAuthenticated(Register)} />
            <Route exact path="/client/add" component={UserIsAuthenticated(AddClient)} />
            <Route exact path="/client/:id" component={UserIsAuthenticated(ClientDetails)} />
            <Route exact path="/client/edit/:id" component={UserIsAuthenticated(EditClient)} />
            <Route exact path="/settings" component={UserIsAuthenticated(Settings)} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
