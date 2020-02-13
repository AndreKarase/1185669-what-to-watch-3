import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`Should Main render correctly`, () => {
  const tree = renderer.create(
      <Main
        title = {`The Grand Budapest Hotel`}
        genre = {`Drama`}
        releaseDate = {`2014`}
        titles = {[
          `Fantastic Beasts: The Crimes of Grindelwald`,
          `Bohemian Rhapsody`,
          `Macbeth`
        ]}
        onHeaderClick = {() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
