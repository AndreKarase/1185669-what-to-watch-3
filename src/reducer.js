import moviesAll from './mocks/films.js';
import {extend, getMoviesByGenre} from './utils.js';


const initialState = {
  activeGenre: `All genres`,
  activeMovie: null,
  movies: moviesAll,
  moviesAll
};

const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  CHANGE_ACTIVE_MOVIE: `CHANGE_ACTIVE_MOVIE`,
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
      });

    case ActionType.CHANGE_ACTIVE_MOVIE:
      return extend(state, {activeMovie: action.payload});

    case ActionType.GET_MOVIES:
      return extend(state, {
        movies: getMoviesByGenre(state.moviesAll, action.payload)
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
