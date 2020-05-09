import React from 'react';
import renderer from 'react-test-renderer';
import ShowMore from './show-more.jsx';

const movies = [
  {
    title: `movie-1`,
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
    title: `movie-2`,
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
    title: `movie-3`,
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

it(`Should render ShowMore`, () => {
  const tree = renderer.create(
      <ShowMore
        onClick = {() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
