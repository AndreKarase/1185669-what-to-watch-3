import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

const movie = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`Should render MovieCard`, () => {
  const tree = renderer.create(
      <MovieCard
        movie = {movie}
        onMouseOver = {() => {}}
        onMouseOut ={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
