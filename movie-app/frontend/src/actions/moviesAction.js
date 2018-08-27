import axios from 'axios';
import { API_BASE } from '../config/env';

export const fetchMovieAction = id => (dispatch) => {
  dispatch({
    type: 'FETCH_MOVIE',
    payload: axios.get(`${API_BASE}/movies/${id}`).then(response => response.data),
  });
};

export const fetchMoviesAction = () => (dispatch) => {
  dispatch({
    type: 'FETCH_MOVIES',
    payload: axios.get(`${API_BASE}/movies`).then(response => response.data.movies),
  });
};

export const addMovieAction = ({ title, cover }) => (dispatch) => {
  dispatch({
    type: 'ADD_MOVIE',
    payload: axios.post(`${API_BASE}/movies `, {
      title,
      cover,
    }),
  });
};

export const updateMovieAction = ({ id, title, cover }) => (dispatch) => {
  dispatch({
    type: 'UPDATE_MOVIE',
    payload: axios.put(`${API_BASE}/movies/${id} `, {
      title,
      cover,
    }),
  });
};

export const deleteMovieAction = id => (dispatch) => {
  dispatch({
    type: 'DELETE_MOVIE',
    payload: axios
      .delete(`${API_BASE}/movies/${id} `)
      .then(response => Object.assign({}, response, { id })),
  });
};
