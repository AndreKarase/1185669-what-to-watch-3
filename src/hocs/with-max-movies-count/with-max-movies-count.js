import React, {PureComponent} from 'react';

const INITIAL_MOVIES_COUNT = 8;

const withMaxMoviesCount = (Component) => {
  class WithMaxMoviesCount extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        maxMoviesCount: INITIAL_MOVIES_COUNT
      };
    }

    render() {
      const {maxMoviesCount} = this.state;

      return (
        <Component
          {...this.props}
          resetMaxMoviesCount={() => this.setState({
            maxMoviesCount: INITIAL_MOVIES_COUNT
          })}
          onShowMoreClick={() => this.setState((prevState) => ({
            maxMoviesCount: prevState.maxMoviesCount + 8
          }))}
          maxMoviesCount={maxMoviesCount}
        />
      );
    }
  }

  return WithMaxMoviesCount;
};

export default withMaxMoviesCount;
