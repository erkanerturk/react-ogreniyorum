import {
  FETCH_MOVIES_FULFILLED,
  FETCH_MOVIES_REJECTED,
  FETCH_MOVIES_PENDING,
  DELETE_MOVIE_PENDING,
  DELETE_MOVIE_FULFILLED,
  DELETE_MOVIE_REJECTED,
} from '../constants/actionTypes';

const initialState = {
  fetching: false,
  movies: [],
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    // FETCH MOVIES
    case FETCH_MOVIES_PENDING:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_MOVIES_FULFILLED:
      return {
        ...state,
        fetching: false,
        movies: action.payload,
      };
    case FETCH_MOVIES_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    // DELETE MOVIE
    case DELETE_MOVIE_PENDING:
      return {
        ...state,
        fetching: true,
      };
    case DELETE_MOVIE_FULFILLED:
      return {
        ...state,
        fetching: false,
        movies: state.movies.filter(movie => movie._id !== action.payload.id),
      };
    case DELETE_MOVIE_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
