import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

const MOVIES_STEP = 8;

const ShowMore = (props) => {
  const {movies, maxMovieCount, onShowMoreClick} = props;

  if (maxMovieCount >= movies.length) {
    return null;
  }

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => onShowMoreClick(maxMovieCount)}>Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  maxMovieCount: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  maxMovieCount: state.maxMovieCount,
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick(prevCount) {
    dispatch(ActionCreator.setMaxMovieCount(prevCount + MOVIES_STEP));
  }
});

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
