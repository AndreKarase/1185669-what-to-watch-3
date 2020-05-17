import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import MoviesList from '../movies-list/movies-list.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import ShowMore from '../show-more/show-more.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

const GenreListWrapped = withActiveItem(GenreList);
const MoviesListWrapped = withActiveItem(MoviesList);

class Board extends PureComponent {
  render() {
    const {maxMoviesCount, movies, moviesAll, onChangeActiveGenre, onShowMoreClick, resetMaxMoviesCount} = this.props;

    return (
      <Fragment>
        <GenreListWrapped
          movies={moviesAll}
          activeItem={`All movies`}
          onChangeActiveGenre={(genre) => {
            onChangeActiveGenre(genre);
            resetMaxMoviesCount();
          }}
        />
        <MoviesListWrapped
          movies={movies}
          activeItem={movies[0]}
          maxCount={maxMoviesCount}
        />
        {maxMoviesCount < movies.length ?
          <ShowMore
            onClick={onShowMoreClick}
          /> : null
        }
      </Fragment>
    );
  }
}

Board.propTypes = {
  maxMoviesCount: PropTypes.number.isRequired,
  movies: PropTypes.array.isRequired,
  moviesAll: PropTypes.array.isRequired,
  onChangeActiveGenre: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  resetMaxMoviesCount: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  moviesAll: state.moviesAll,
  movies: state.movies,
  activeGenre: state.activeGenre
});

const mapDispatchToProps = (dispatch) => ({
  onChangeActiveGenre(genre) {
    dispatch(ActionCreator.changeActiveGenre(genre));
    dispatch(ActionCreator.getMovies(genre));
  }
});

export {Board};
export default connect(mapStateToProps, mapDispatchToProps)(Board);

