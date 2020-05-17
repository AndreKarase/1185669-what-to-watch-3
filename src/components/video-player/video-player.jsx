import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends PureComponent {
  render() {
    const {children, isPreview, isLoading, title, progress, timeLeft, onFullScreenButtonClick, onPlayButtonClick, onCloseButtonClick} = this.props;

    return (
      <div className="player">
        {children}
        {!isPreview ?
          <Fragment>
            <button type="button" className="player__exit" onClick={onCloseButtonClick}>
              Exit
            </button>
            <div className="player__controls">
              <div className="player__controls-row">
                <div className="player__time">
                  <progress className="player__progress" value={progress} max={100} />
                  <div className="player__toggler" style={{left: `${progress}%`}}>
                    Toggler
                  </div>
                </div>
                <div className="player__time-value">{timeLeft}</div>
              </div>
              <div className="player__controls-row">
                <button type="button" className="player__play" onClick={onPlayButtonClick} disabled={isLoading}>
                  <svg viewBox="0 0 14 21" width={14} height={21}>
                    <use xlinkHref="#pause" />
                  </svg>
                  <span>Pause</span>
                </button>
                <div className="player__name">{title}</div>
                <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
                  <svg viewBox="0 0 27 27" width={27} height={27}>
                    <use xlinkHref="#full-screen" />
                  </svg>
                  <span>Full screen</span>
                </button>
              </div>
            </div>
          </Fragment> : null}
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  timeLeft: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isPreview: PropTypes.bool.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
