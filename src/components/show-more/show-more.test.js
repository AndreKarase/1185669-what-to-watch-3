import React from 'react';
import renderer from 'react-test-renderer';
import ShowMore from './show-more.jsx';

it(`Should render ShowMore`, () => {
  const tree = renderer.create(
      <ShowMore
        onClick = {() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
