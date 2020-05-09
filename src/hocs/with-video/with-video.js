import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
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
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.src = ``;
    }

    render() {
      return (
        <Component
          {...this.props}
        />
      );
    }
  }

  WithVideo.propTypes = {
    src: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
  };

  return WithVideo;
};

export default withVideo;
