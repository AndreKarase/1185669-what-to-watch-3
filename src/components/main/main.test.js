import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Main from './main.jsx';

const mockStore = configureStore([]);

const movies = [
  {
    title: `The Grand Budapest Hotel`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: ``
  }, {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: ``
  }, {
    title: `Bohemian Rhapsody`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: ``
  }
];

it(`Should Main render correctly`, () => {
  const store = mockStore({
    activeGenre: `All genres`,
    moviesAll: movies,
    movies
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Main
          title = {`The Grand Budapest Hotel`}
          genre = {`Drama`}
          releaseDate = {`2014`}
          onHeaderClick = {() => {}}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
