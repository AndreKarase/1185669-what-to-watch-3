import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const headerClickHandler = () => {};

const App = (props) => {
  const {title, genre, releaseDate, titles} = props;

  return (
    <Main
      title = {title}
      genre = {genre}
      releaseDate = {releaseDate}
      titles = {titles}
      onHeaderClick = {headerClickHandler}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  titles: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default App;
