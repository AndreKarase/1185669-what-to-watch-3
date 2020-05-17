import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {formatMovieTime} from '../../utils.js';

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        progress: 0,
        timeLeft: 0,
        isLoading: true,
        isPlaying: true,
        isFullScreen: false
      };
    }

    componentDidMount() {
      const {src} = this.props;
      const video = this._videoRef.current;

      video.src = src;

      video.oncanplaythrough = () => {
        this.setState({
          isLoading: false
        });
      };

      video.onfullscreenchange = () => {
        this.setState({
          isFullScreen: false
        });
      };

      video.onplay = () => {
        this.setState({
          isPlaying: true
        });
      };

      video.onpause = () => {
        this.setState({
          isPlaying: false
        });
      };

      video.ontimeupdate = () => {
        this.setState({
          progress: Math.floor(video.currentTime) / Math.floor(video.duration) * 100,
          timeLeft: Math.floor(video.duration) - Math.floor(video.currentTime)
        });
      };

      video.onended = () => {
        video.src = src;
      };
    }

    componentDidUpdate() {
      const {isFullScreen, isPlaying} = this.state;
      const video = this._videoRef.current;

      if (isFullScreen) {
        video.requestFullscreen();
      }

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = null;
      video.onfullscreenchange = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
      video.onended = null;
      video.src = ``;
    }

    render() {
      const {poster, muted} = this.props;
      const {isFullScreen, isLoading, isPlaying, progress, timeLeft: timeLeftNotFormated} = this.state;
      const video = this._videoRef.current;

      const timeLeft = formatMovieTime(timeLeftNotFormated);

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          progress={progress}
          timeLeft={timeLeft}
          onFullScreenButtonClick={() => this.setState({
            isFullScreen: !isFullScreen
          })}
          onPlayButtonClick={() => this.setState({
            isPlaying: !isPlaying
          })}
        >
          <video className="player__video" poster={poster} muted={muted} ref={this._videoRef}/>
        </Component>
      );
    }
  }

  WithVideo.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    muted: PropTypes.bool.isRequired
  };

  return WithVideo;
};

export default withVideo;
