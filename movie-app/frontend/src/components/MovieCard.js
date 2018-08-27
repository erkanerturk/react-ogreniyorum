import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, Grid, Button, Icon } from 'semantic-ui-react';

const extra = (id, deleteMovie) => (
  <div className="ui two buttons">
    <Button animated as={Link} to={`/movie/update/${id}`}>
      <Button.Content visible>Edit</Button.Content>
      <Button.Content hidden>
        <Icon name="arrow right" />
      </Button.Content>
    </Button>
    <Button animated="vertical" onClick={() => deleteMovie(id)}>
      <Button.Content hidden>Delete</Button.Content>
      <Button.Content visible>
        <Icon name="delete" />
      </Button.Content>
    </Button>
  </div>
);

const MovieCard = ({ movie, deleteMovie }) => (
  <Grid.Column>
    <Card image={movie.cover} header={movie.title} extra={extra(movie._id, deleteMovie)} />
  </Grid.Column>
);

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

export default MovieCard;
