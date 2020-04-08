import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';


const GenreList = ({activeGenre, moviesAll, onGenreClick}) => {
  const genres = new Set();
  genres.add(`All genres`);
  moviesAll.forEach((movie) => genres.add(movie.genre));

  return (
    <ul className="catalog__genres-list">
      {Array.from(genres).map((genre, i) => {
        return (
          <li key={`genre-${i}`} className={`catalog__genres-item catalog__genres-item${genre === activeGenre ? `--active` : ``}`}>
            <a href="#" className="catalog__genres-link"
              onClick={() => onGenreClick(genre)}
            >
              {genre}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

GenreList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  moviesAll: PropTypes.array.isRequired,
  onGenreClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  moviesAll: state.moviesAll
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeActiveGenre(genre));
    dispatch(ActionCreator.getMovies());
  }
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);

