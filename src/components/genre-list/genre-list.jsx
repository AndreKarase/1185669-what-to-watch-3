import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


class GenreList extends PureComponent {

  render() {
    const {movies, onChangeActiveGenre, onChangeActiveItem, activeItem: activeGenre} = this.props;

    const genres = new Set();
    genres.add(`All genres`);
    movies.forEach((movie) => genres.add(movie.genre));

    return (
      <ul className="catalog__genres-list">
        {Array.from(genres).map((genre, i) => {
          return (
            <li key={`genre-${i}`} className={`catalog__genres-item catalog__genres-item${genre === activeGenre ? `--active` : ``}`}>
              <a href="#" className="catalog__genres-link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onChangeActiveItem(genre);
                  onChangeActiveGenre(genre);
                }}
              >
                {genre}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

GenreList.propTypes = {
  movies: PropTypes.array.isRequired,
  onChangeActiveGenre: PropTypes.func.isRequired,
  onChangeActiveItem: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired
};

export default GenreList;

