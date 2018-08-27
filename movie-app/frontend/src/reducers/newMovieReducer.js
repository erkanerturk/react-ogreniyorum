import {
  ADD_MOVIE_PENDING,
  ADD_MOVIE_FULFILLED,
  ADD_MOVIE_REJECTED,
  FETCH_MOVIE_PENDING,
  FETCH_MOVIE_FULFILLED,
  FETCH_MOVIE_REJECTED,
  UPDATE_MOVIE_PENDING,
  UPDATE_MOVIE_FULFILLED,
  UPDATE_MOVIE_REJECTED,
} from '../constants/actionTypes';

const initialState = {
  fetching: false,
  done: false,
  movie: {},
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    // ADD MOVIE
    case ADD_MOVIE_PENDING:
      return {
        ...state,
        fetching: true,
        done: false,
      };
    case ADD_MOVIE_FULFILLED:
      return {
        ...state,
        fetching: false,
        done: true,
      };
    case ADD_MOVIE_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    // FETCH MOVIE
    case FETCH_MOVIE_PENDING:
      return {
        ...state,
        fetching: true,
        movie: {},
      };
    case FETCH_MOVIE_FULFILLED:
      return {
        ...state,
        movie: {
          ...action.payload.movie,
        },
        fetching: false,
      };
    case FETCH_MOVIE_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    // UPDATE MOVIE
    case UPDATE_MOVIE_PENDING:
      return {
        ...state,
        fetching: true,
        done: false,
      };
    case UPDATE_MOVIE_FULFILLED:
      return {
        ...state,
        fetching: false,
        done: true,
      };
    case UPDATE_MOVIE_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
