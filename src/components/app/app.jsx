import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const headerClickHandler = () => {};

const App = (props) => {
  const {title, genre, releaseDate, movies} = props;

  return (
    <Main
      title = {title}
      genre = {genre}
      releaseDate = {releaseDate}
      movies = {movies}
      onHeaderClick = {headerClickHandler}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired
};

export default App;
