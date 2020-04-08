import React from 'react';
import renderer from 'react-test-renderer';
import {MoviesList} from './movies-list';

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

it(`Should render MoviesList`, () => {
  const tree = renderer.create(
      <MoviesList
        movies={movies}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
