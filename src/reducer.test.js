import {reducer, ActionType, ActionCreator} from './reducer.js';

const moviesAll = [
  {
    title: `movie-1`,
    previewImage: ``,
    posterImage: ``,
    backgroundImage: ``,
    genre: `Drama`,
    releaseDate: 1998,
    preview: ``,
    description: ``,
    rating: 10,
    scoresCount: 1,
    director: ``,
    starring: [``, ``, ``],
  }, {
    title: `movie-2`,
    previewImage: ``,
    posterImage: ``,
    backgroundImage: ``,
    genre: ``,
    releaseDate: 1998,
    preview: ``,
    description: ``,
    rating: 10,
    scoresCount: 1,
    director: ``,
    starring: [``, ``, ``],
  }, {
    title: `movie-3`,
    previewImage: ``,
    posterImage: ``,
    backgroundImage: ``,
    genre: ``,
    releaseDate: 1998,
    preview: ``,
    description: ``,
    rating: 10,
    scoresCount: 1,
    director: ``,
    starring: [``, ``, ``],
  }
];


it(`Reducer without additional parameters should render initial state`, () => {
  expect(reducer({
    activeGenre: `All genres`,
    movies: moviesAll,
    moviesAll
  }, {})).toEqual({
    activeGenre: `All genres`,
    movies: moviesAll,
    moviesAll
  });
});

it(`Reducer should change active genre by a given value`, () => {
  expect(reducer({
    activeGenre: `All genres`,
    maxMovieCount: 16,
    movies: moviesAll,
    moviesAll
  }, {
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: `Drama`
  })).toEqual({
    activeGenre: `Drama`,
    maxMovieCount: 8,
    movies: moviesAll,
    moviesAll
  });
});

it(`Reducer should change active movie by a given value`, () => {
  expect(reducer({
    activeMovie: {
      genre: ``,
      title: ``,
      releaseDate: 2000
    },
    movies: moviesAll,
    moviesAll
  }, {
    type: ActionType.CHANGE_ACTIVE_MOVIE,
    payload: {
      genre: `Drama`,
      title: `Untitled`,
      releaseDate: 1999
    }
  })).toEqual({
    activeMovie: {
      genre: `Drama`,
      title: `Untitled`,
      releaseDate: 1999
    },
    movies: moviesAll,
    moviesAll
  });
});

it(`Reducer should change max movie count by a given value`, () => {
  expect(reducer({
    maxMovieCount: 8,
    movies: moviesAll,
    moviesAll
  }, {
    type: ActionType.SET_MAX_MOVIE_COUNT,
    payload: 16
  })).toEqual({
    maxMovieCount: 16,
    movies: moviesAll,
    moviesAll
  });
});

it(`Reducer should get movies by a given genre`, () => {
  expect(reducer({
    activeGenre: `Drama`,
    movies: moviesAll,
    moviesAll
  }, {
    type: ActionType.GET_MOVIES,
    payload: `Drama`
  })).toEqual({
    activeGenre: `Drama`,
    movies: [{
      title: `movie-1`,
      previewImage: ``,
      posterImage: ``,
      backgroundImage: ``,
      genre: `Drama`,
      releaseDate: 1998,
      preview: ``,
      description: ``,
      rating: 10,
      scoresCount: 1,
      director: ``,
      starring: [``, ``, ``],
    }],
    moviesAll
  });
});

describe(`Action creatos work correctly`, () => {
  it(`Action creator for changing active genre returns correct action`, () => {
    expect(ActionCreator.changeActiveGenre(`Drama`)).toEqual({
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: `Drama`
    });
  });

  it(`Action creator for changing active genre returns correct action`, () => {
    expect(ActionCreator.getMovies()).toEqual({
      type: ActionType.GET_MOVIES
    });
  });
});