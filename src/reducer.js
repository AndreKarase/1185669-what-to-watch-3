import moviesAll from './mocks/films.js';
import {extend, getMoviesByGenre} from './utils.js';

const INITIAL_MOVIE_COUNT = 8;

const initialState = {
  activeGenre: `All genres`,
  activeMovie: null,
  maxMovieCount: INITIAL_MOVIE_COUNT,
  movies: moviesAll,
  moviesAll
};

const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  CHANGE_ACTIVE_MOVIE: `CHANGE_ACTIVE_MOVIE`,
  SET_MAX_MOVIE_COUNT: `SET_MAX_MOVIE_COUNT`,
  GET_MOVIES: `GET_MOVIES`
};

const ActionCreator = {
  changeActiveGenre: (genre) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: genre
  }),

  changeActiveMovie: (movie) => ({
    type: ActionType.CHANGE_ACTIVE_MOVIE,
    payload: movie
  }),

  setMaxMovieCount: (count) => ({
    type: ActionType.SET_MAX_MOVIE_COUNT,
    payload: count
  }),

  getMovies: (genre) => ({
    type: ActionType.GET_MOVIES,
    payload: genre
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
        maxMovieCount: INITIAL_MOVIE_COUNT
      });

    case ActionType.CHANGE_ACTIVE_MOVIE:
      return extend(state, {activeMovie: action.payload});

    case ActionType.SET_MAX_MOVIE_COUNT:
      return extend(state, {maxMovieCount: action.payload});

    case ActionType.GET_MOVIES:
      return extend(state, {
        movies: getMoviesByGenre(state.moviesAll, action.payload)
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
