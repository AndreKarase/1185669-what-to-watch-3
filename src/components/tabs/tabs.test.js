import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs.jsx';

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

it(`Should render Tabs`, () => {
  const tree = renderer.create(
      <Tabs
        movie = {movie}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
