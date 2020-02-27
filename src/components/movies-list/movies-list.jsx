import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {movie: null};
  }

  render() {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => (<MovieCard
          key = {movie.title}
          movie = {movie}
          onMouseEnter = {(hoverMovie) => {
            this.setState({movie: hoverMovie});
          }}
          onMouseLeave = {() => {
            this.setState({movie: null});
          }}
        />))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MoviesList;
