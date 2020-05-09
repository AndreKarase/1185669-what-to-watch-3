import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app.jsx';

const mockStore = configureStore([]);

const movies = [
  {
    title: `1`,
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
    title: `2`,
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
    title: `3`,
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

it(`Should render App`, () => {
  const store = mockStore({
    activeGenre: `All genres`,
    moviesAll: movies,
    movies
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          title = {`The Grand Budapest Hotel`}
          genre = {`Drama`}
          releaseDate = {`2014`}
          activeMovie={movies[0]}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
