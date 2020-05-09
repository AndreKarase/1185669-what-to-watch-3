import React from 'react';
import renderer from 'react-test-renderer';
import GenreList from './genre-list.jsx';

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

it(`Should render GenreList`, () => {
  const tree = renderer.create(
      <GenreList
        movies={movies}
        activeItem={`All genres`}
        onChangeActiveGenre={() => {}}
        onChangeActiveItem={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
