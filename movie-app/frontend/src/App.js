import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import { Container } from 'semantic-ui-react';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import MoviesPage from './components/pages/MoviesPage';
import NewMoviePage from './components/pages/NewMoviePage';
import NotFoundPage from './components/pages/NotFoundPage';

const App = () => (
  <div className="App">
    <Header />

    <Container text>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/movies" component={MoviesPage} exact />
        <Route path="/movie/add" component={NewMoviePage} exact />
        <Route path="/movie/update/:id" component={NewMoviePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  </div>
);

export default App;
