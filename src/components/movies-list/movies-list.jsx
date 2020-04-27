import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieCard from '../movie-card/movie-card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {movie: null};
  }

  render() {
    const {maxCount, movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.slice(0, maxCount).map((movie) => (<MovieCard
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
  movies: PropTypes.array.isRequired,
  maxCount: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  maxCount: state.maxMovieCount
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
