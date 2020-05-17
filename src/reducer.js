import moviesAll from './mocks/films.js';
import {extend, getMoviesByGenre} from './utils.js';
import {Screen} from './const.js';


const initialState = {
  activeScreen: Screen.MAIN,
  previosScreen: null,
  activeGenre: `All genres`,
  activeMovie: null,
  movies: moviesAll,
  moviesAll
};

const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  CHANGE_ACTIVE_MOVIE: `CHANGE_ACTIVE_MOVIE`,
  SET_ACTIVE_SCREEN: `SET_ACTIVE_SCREEN`,
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

  setActiveScreen: (screen) => ({
    type: ActionType.SET_ACTIVE_SCREEN,
    payload: screen
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

    case ActionType.SET_ACTIVE_SCREEN:
      return extend(state, {
        activeScreen: action.payload,
        previosScreen: state.activeScreen
      });

    case ActionType.GET_MOVIES:
      return extend(state, {
        movies: getMoviesByGenre(state.moviesAll, action.payload)
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
