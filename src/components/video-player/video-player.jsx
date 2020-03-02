import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {src, isPlaying} = this.props;
    const video = this._videoRef.current;

    video.src = src;

    if (isPlaying) {
      video.play();
    }

    if (isPlaying) {
      video.play();
    }
  }

  render() {
    const {muted, poster} = this.props;

    return (
      <video src="#" className="player__video" poster={poster} muted={muted} ref={this._videoRef}/>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired
};
