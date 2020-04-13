import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasPlayer: false
    };
  }

  render() {
    const {onMouseEnter, onMouseLeave, onHeaderClick, movie} = this.props;
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
        onClick={onHeaderClick}
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
  onHeaderClick: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired
};

export default MovieCard;
