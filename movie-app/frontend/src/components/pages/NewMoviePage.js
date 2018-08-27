import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addMovieAction, fetchMovieAction, updateMovieAction } from '../../actions/moviesAction';

import NewMovieForm from '../NewMovieForm';

class NewMoviePage extends Component {
  componentDidMount() {
    const { match, movie } = this.props;
    if (!movie && match.params.id) {
      const { fetchMovie } = this.props;
      fetchMovie(match.params.id);
    }
  }

  render() {
    const { addMovie, updateMovie, newMovie, movie } = this.props;
    return (
      <div>
        <h2>New Movie</h2>
        <NewMovieForm
          addMovie={addMovie}
          updateMovie={updateMovie}
          newMovie={newMovie}
          movie={movie}
        />
      </div>
    );
  }
}

NewMoviePage.propTypes = {
  newMovie: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  addMovie: PropTypes.func.isRequired,
  fetchMovie: PropTypes.func.isRequired,
  updateMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  newMovie: state.newMovieReducer,
  movie: state.moviesReducer.movies.find(item => item._id === props.match.params.id),
});

const mapDispatchToProps = {
  addMovie: addMovieAction,
  fetchMovie: fetchMovieAction,
  updateMovie: updateMovieAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewMoviePage);
