import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';

configure({adapter: new Adapter()});

const movie = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`When hover is over movie-card, should enter movie-info to the handler`, () => {
  const onMouseEnter = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => {}}
      />
  );

  movieCard.simulate(`mouseenter`);

  expect(onMouseEnter).toHaveBeenCalledTimes(1);
  expect(onMouseEnter.mock.calls[0][0]).toMatchObject(movie);
});


