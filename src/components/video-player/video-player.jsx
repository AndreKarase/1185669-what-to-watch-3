import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;

    video.src = src;

    video.oncanplay = () => this.setState({
      isLoading: false
    });

    video.onplay = () => this.setState({
      isPlaying: true
    });

    video.onpause = () => this.setState({
      isPlaying: false
    });

    video.ontimeupdate = () => this.setState({
      progress: video.currentTime
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplay = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.src = ``;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  render() {
    const {muted, poster} = this.props;
    const {isPlaying, isLoading} = this.state;

    return (
      <div className="player">
        <video src="#" className="player__video" poster={poster} muted={muted} ref={this._videoRef}/>

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100" />
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play"
              disabled={isLoading}
              onClick={() => this.setState({isPlaying: !this.state.isPlaying})}
            >
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref={isPlaying ? `#pause` : `#play-s`}/>
              </svg>
              <span>{isPlaying ? `Pause` : `Play`}</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"/>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired
};
