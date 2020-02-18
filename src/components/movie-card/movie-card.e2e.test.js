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
  const onMouseOver = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMouseOver={onMouseOver}
        onMouseOut={() => {}}
      />
  );

  // const movieCardElement = movieCard.find(`.small-movie-card`);
  movieCard.simulate(`mouseover`);

  expect(onMouseOver).toHaveBeenCalledTimes(1);
  expect(onMouseOver.mock.calls[0][0]).toMatchObject(movie);
});


