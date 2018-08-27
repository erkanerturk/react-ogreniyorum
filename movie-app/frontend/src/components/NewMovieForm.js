import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Button, Form, Image, Message } from 'semantic-ui-react';

import InlineError from './InlineError';

class NewMovieForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    id: this.props.movie ? this.props.movie._id : '',
    title: this.props.movie ? this.props.movie.title : '',
    cover: this.props.movie ? this.props.movie.cover : '',
    errors: {},
    redirect: false,
  };

  componentWillReceiveProps(nextProps) {
    const { movie } = nextProps.newMovie;
    if (movie.title && movie.title !== this.state.title) {
      this.setState({
        title: movie.title,
        cover: movie.cover,
      });
    }
  }

  onSubmit(e) {
    const errors = this.validate();
    this.setState({
      errors,
      redirect: true,
    });

    const { addMovie, updateMovie, newMovie } = this.props;
    const id = this.state.id || newMovie.movie._id;
    if (Object.keys(errors).length === 0) {
      if (!id) {
        addMovie(this.state);
      } else {
        updateMovie({ ...this.state, id });
      }
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  validate() {
    const errors = {};
    const { title, cover } = this.state;
    if (!title) errors.title = "Can't be blank";
    if (!cover) errors.cover = "Can't be blank";
    return errors;
  }

  render() {
    const { errors, title, cover, redirect } = this.state;
    const { newMovie } = this.props;

    const form = (
      <Form onSubmit={this.onSubmit} loading={newMovie.fetching}>
        <Form.Field error={!!errors.title}>
          <label>Title</label>
          {errors.title && <InlineError message={errors.title} />}
          <input id="title" value={title} onChange={this.handleChange} placeholder="Title" />
        </Form.Field>
        <Form.Field error={!!errors.cover}>
          <label>Cover</label>
          {errors.cover && <InlineError message={errors.cover} />}
          <input id="cover" value={cover} onChange={this.handleChange} placeholder="Cover" />
        </Form.Field>
        <Button type="submit" positive>
          Submit
        </Button>
        <Image src={cover} size="small" />
        {newMovie.error.response && (
          <Message negative>
            <Message.Header>We are sorry</Message.Header>
            <p>A problem occurred while recording</p>
          </Message>
        )}
      </Form>
    );
    return <div>{newMovie.done && redirect ? <Redirect to="/movies" /> : form}</div>;
  }
}

NewMovieForm.propTypes = {
  newMovie: PropTypes.object.isRequired,
  addMovie: PropTypes.func.isRequired,
  updateMovie: PropTypes.func.isRequired,
};

export default NewMovieForm;
