import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

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

it(`Should Main render correctly`, () => {
  const tree = renderer.create(
      <Main
        title = {`The Grand Budapest Hotel`}
        genre = {`Drama`}
        releaseDate = {`2014`}
        movies = {movies}
        onHeaderClick = {() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});