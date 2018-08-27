import React from 'react';
import PropTypes from 'prop-types';

import { Card, Grid } from 'semantic-ui-react';

const ActorCard = ({ actor }) => (
  <Grid.Column>
    <Card>
      <Card image={actor.photo} header={actor.name} extra={actor.description} />
    </Card>
  </Grid.Column>
);

ActorCard.propTypes = {
  actor: PropTypes.object.isRequired,
};

export default ActorCard;
