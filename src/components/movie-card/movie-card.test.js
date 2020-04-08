import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

const movie = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: ``
};

it(`Should render MovieCard`, () => {
  const tree = renderer.create(
      <MovieCard
        movie = {movie}
        onMouseEnter = {() => {}}
        onMouseLeave ={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
