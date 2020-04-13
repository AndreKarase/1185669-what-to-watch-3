import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from './movie-details.jsx';

const movie = {
  title: `The Grand Budapest Hotel`,
  previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  genre: `Drama`,
  releaseDate: 1998,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 8.9,
  scoresCount: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
};

it(`Should render MovieDetails`, () => {
  const tree = renderer.create(
      <MovieDetails
        movie = {movie}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
