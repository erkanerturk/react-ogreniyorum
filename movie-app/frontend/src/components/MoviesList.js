import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from 'semantic-ui-react';

import MovieCard from './MovieCard';
import LoaderHOC from './LoaderHOC';

const MoviesList = ({ movies, error, deleteMovie }) => {
  const emptyMessage = <p>There are no movies yet</p>;
  const moviesList = (
    <div>
      {error.response ? (
        <h3>Error retrieving data</h3>
      ) : (
        <Grid stackable columns={3}>
          {movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie} />
          ))}
        </Grid>
      )}
    </div>
  );

  return <div>{movies.length === 0 ? emptyMessage : moviesList}</div>;
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

export default LoaderHOC(MoviesList, 'fetching');
