import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';

configure({adapter: new Adapter()});

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

it(`When hover is over movie-card, should enter movie-info to the handler`, () => {
  const onMouseEnter = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => {}}
        onHeaderClick={() => {}}
      />
  );

  movieCard.simulate(`mouseenter`);

  expect(onMouseEnter).toHaveBeenCalledTimes(1);
  expect(onMouseEnter.mock.calls[0][0]).toMatchObject(movie);
});

it(`Should header be clicked`, () => {
  const onHeaderClick = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        onHeaderClick={onHeaderClick}
      />
  );

  movieCard.simulate(`click`);

  expect(onHeaderClick).toHaveBeenCalledTimes(1);
});

