import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withHavingPlayer = (Component) => {
  class WithHavingPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._timeout = null;

      this.state = {
        hasPlayer: false
      };

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
      const {movie, onMouseEnter} = this.props;

      this._timeout = setTimeout(() => {
        this.setState({
          hasPlayer: true
        });
      }, 1000);

      onMouseEnter(movie);
    }

    handleMouseLeave() {
      const {onMouseLeave} = this.props;

      clearTimeout(this._timeout);
      this.setState({
        hasPlayer: false
      });
      onMouseLeave();
    }

    render() {
      const {hasPlayer} = this.state;

      return (
        <Component
          {...this.props}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          hasPlayer={hasPlayer}
        />
      );
    }
  }

  WithHavingPlayer.propTypes = {
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired
    }).isRequired
  };

  return WithHavingPlayer;
};

export default withHavingPlayer;
