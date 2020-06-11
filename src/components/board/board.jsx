import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviesList from '../movies-list/movies-list.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import ShowMore from '../show-more/show-more.jsx';
import {ActionCreator} from '../../reducer/app/app.js';
import {getMovies, getMoviesAll} from '../../reducer/data/selectors.js';
import {getActiveGenre} from '../../reducer/app/selectors.js';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

const GenreListWrapped = withActiveItem(GenreList);
const MoviesListWrapped = withActiveItem(MoviesList);

class Board extends PureComponent {
  render() {
    const {maxMoviesCount, moviesAll, movies, onChangeActiveGenre, onShowMoreClick, resetMaxMoviesCount} = this.props;

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
  moviesAll: getMoviesAll(state),
  movies: getMovies(state),
  activeGenre: getActiveGenre(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeActiveGenre(genre) {
    dispatch(ActionCreator.changeActiveGenre(genre));
  }
});

export {Board};
export default connect(mapStateToProps, mapDispatchToProps)(Board);

