import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchMoviesAction, deleteMovieAction } from '../../actions/moviesAction';

import MoviesList from '../MoviesList';

class MoviesPage extends Component {
  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  render() {
    const { movies, fetching, error, deleteMovie } = this.props;
    return (
      <div>
        <h2>Movies</h2>
        <MoviesList movies={movies} fetching={fetching} error={error} deleteMovie={deleteMovie} />
      </div>
    );
  }
}

MoviesPage.propTypes = {
  movies: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer.movies,
    fetching: state.moviesReducer.fetching,
    error: state.moviesReducer.error,
  };
};

const mapDispatchToProps = {
  fetchMovies: fetchMoviesAction,
  deleteMovie: deleteMovieAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesPage);
