import moviesAll from './mocks/films.js';
import {extend} from './utils.js';

const initialState = {
  activeGenre: `All genres`,
  movies: moviesAll,
  moviesAll
};

const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  GET_MOVIES: `GET_MOVIES`
};

const getMoviesByGenre = (movies, genre) => {
  return genre === `All genres` ? movies : movies.filter((movie) => movie.genre === genre);
};

const ActionCreator = {
  changeActiveGenre: (genre) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: genre
  }),

  getMovies: () => ({
    type: ActionType.GET_MOVIES
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {activeGenre: action.payload});

    case ActionType.GET_MOVIES:
      return extend(state, {
        movies: getMoviesByGenre(state.moviesAll, state.activeGenre)
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
