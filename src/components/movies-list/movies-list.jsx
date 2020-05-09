import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import withHavingPlayer from '../../hocs/with-having-player/with-having-player.js';

const MovieCardWrapped = withHavingPlayer(MovieCard);

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeMovie: null};
  }

  render() {
    const {maxCount, movies, onChangeActiveItem} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.slice(0, maxCount).map((movie) => (<MovieCardWrapped
          key = {movie.title}
          movie = {movie}
          onMouseEnter = {(hoverMovie) => onChangeActiveItem(hoverMovie)}
          onMouseLeave = {() => onChangeActiveItem(null)}
        />))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  maxCount: PropTypes.number.isRequired,
  movies: PropTypes.array.isRequired,
  onChangeActiveItem: PropTypes.func
};


export default MoviesList;
