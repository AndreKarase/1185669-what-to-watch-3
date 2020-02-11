import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`Render App`, () => {
  const tree = renderer.create(
      <App
        title = {`The Grand Budapest Hotel`}
        genre = {`Drama`}
        releaseDate = {`2014`}
        titles = {[
          `Fantastic Beasts: The Crimes of Grindelwald`,
          `Bohemian Rhapsody`,
          `Macbeth`
        ]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
