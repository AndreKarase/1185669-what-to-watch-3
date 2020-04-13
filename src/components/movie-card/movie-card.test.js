import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

const movie = {
  title: ``,
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
};

it(`Should render MovieCard`, () => {
  const tree = renderer.create(
      <MovieCard
        movie = {movie}
        onMouseEnter = {() => {}}
        onMouseLeave ={() => {}}
        onHeaderClick = {() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
