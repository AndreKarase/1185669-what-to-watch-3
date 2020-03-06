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
    const {onMouseEnter, onMouseLeave, movie} = this.props;
    const {title, poster, preview} = movie;

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
      >

        <div className="small-movie-card__image">
          {this.state.hasPlayer ?
            <VideoPlayer
              src={preview}
              poster={poster}
              isPlaying={true}
              muted={true}
            /> :
            <Fragment>
              <img src={poster} alt={title} width="280" height="175" />
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">{title}</a>
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
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired
};

export default MovieCard;