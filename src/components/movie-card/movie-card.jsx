import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app/app.js';
import Player from '../video-player/video-player.jsx';
import {Screen} from '../../const.js';
import withVideo from '../../hocs/with-video/with-video.js';

const VideoPlayer = withVideo(Player);

class MovieCard extends PureComponent {
  render() {
    const {onMouseEnter, onMouseLeave, movie, onMovieClick, hasPlayer} = this.props;
    const {title, previewImage, preview} = movie;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={() => onMovieClick(movie)}
      >

        <div className="small-movie-card__image">
          {hasPlayer ?
            <VideoPlayer
              isPreview={true}
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
  }).isRequired,
  hasPlayer: PropTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onMovieClick(movie) {
    dispatch(ActionCreator.setActiveScreen(Screen.FILM));
    dispatch(ActionCreator.changeActiveMovie(movie));
  }
});

export {MovieCard};
export default connect(null, mapDispatchToProps)(MovieCard);
