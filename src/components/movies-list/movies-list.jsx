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
    const {movies, onHeaderClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, i) => (<MovieCard
          key = {movie.title}
          movie = {movie}
          onHeaderClick = {() => {
            onHeaderClick(i);
          }}
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
  onHeaderClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movies: state.movies
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
