import {reducer, ActionType, ActionCreator} from './app.js';


it(`Reducer without additional parameters should render initial state`, () => {
  expect(reducer({
    activeGenre: `All genres`
  }, {})).toEqual({
    activeGenre: `All genres`
  });
});

it(`Reducer should change active genre by a given value`, () => {
  expect(reducer({
    activeGenre: `All genres`
  }, {
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: `Drama`
  })).toEqual({
    activeGenre: `Drama`
  });
});

it(`Reducer should change active movie by a given value`, () => {
  expect(reducer({
    activeMovie: {
      genre: ``,
      title: ``,
      releaseDate: 2000
    }
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
    }
  });
});

it(`Reducer should get movies by a given genre`, () => {
  expect(reducer({
    activeGenre: `Drama`
  }, {
    type: ActionType.GET_MOVIES,
    payload: `Drama`
  })).toEqual({
    activeGenre: `Drama`
  });
});

describe(`Action creatos work correctly`, () => {
  it(`Action creator for changing active genre returns correct action`, () => {
    expect(ActionCreator.changeActiveGenre(`Drama`)).toEqual({
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: `Drama`
    });
  });

  it(`Action creator for changing active movie returns correct action`, () => {
    expect(ActionCreator.changeActiveMovie({
      genre: `Drama`,
      title: `Untitled`,
      releaseDate: 1999
    })).toEqual({
      type: ActionType.CHANGE_ACTIVE_MOVIE,
      payload: {
        genre: `Drama`,
        title: `Untitled`,
        releaseDate: 1999
      }
    });
  });
});
