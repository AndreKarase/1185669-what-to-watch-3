import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {onMouseOver, onMouseOut, movie} = props;
  const {title, poster} = movie;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        onMouseOver(movie);
      }}
      onMouseOut={onMouseOut}
    >
      <div className="small-movie-card__image">
        <img src={poster} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }).isRequired
};

export default MovieCard;
