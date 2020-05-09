import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Board} from './board.jsx';

const mockStore = configureStore([]);

const movies = [{
  title: `1`,
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
}];

it(`Should render Board`, () => {
  const store = mockStore({
    activeGenre: `All genres`,
    moviesAll: movies,
    movies
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Board
          maxMoviesCount={1}
          movies={movies}
          moviesAll={movies}
          onChangeActiveGenre={() => {}}
          onShowMoreClick={() => {}}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
