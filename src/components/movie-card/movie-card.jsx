import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import VideoPlayer from '../video-player/video-player.jsx';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasPlayer: false
    };
  }

  render() {
    const {onMouseEnter, onMouseLeave, movie, onMovieClick} = this.props;
    const {title, previewImage, preview} = movie;

    const handleMouseEnter = () => {
      this._timeout = setTimeout(() => {
        this.setState({
          hasPlayer: true
        });
      }, 1000);

      onMouseEnter(movie);
    };

    const handleMouseLeave = () => {
      clearTimeout(this._timeout);
      this.setState({
        hasPlayer: false
      });
      onMouseLeave();
    };

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onMovieClick(movie)}
      >

        <div className="small-movie-card__image">
          {this.state.hasPlayer ?
            <VideoPlayer
              src={preview}
              previewImage={previewImage}
              isPlaying={true}
              muted={true}
            /> :
            <Fragment>
              <img src={previewImage} alt={title} width="280" height="175"/>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link">{title}</a>
              </h3>
            </Fragment>
          }
        </div>
      </article>
    );
  }
}

MovieCard.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onMovieClick: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onMovieClick(movie) {
    dispatch(ActionCreator.changeActiveMovie(movie));
    dispatch(ActionCreator.getMovies(movie.genre));
  }
});

export {MovieCard};
export default connect(null, mapDispatchToProps)(MovieCard);
