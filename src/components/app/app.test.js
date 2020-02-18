import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const movies = [
  {
    title: `The Grand Budapest Hotel`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }, {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }, {
    title: `Bohemian Rhapsody`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }
];

it(`Should render App`, () => {
  const tree = renderer.create(
      <App
        title = {`The Grand Budapest Hotel`}
        genre = {`Drama`}
        releaseDate = {`2014`}
        movies = {movies}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
