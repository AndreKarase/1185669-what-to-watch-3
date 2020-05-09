import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: props.activeItem || null
      };
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          onChangeActiveItem={(item) => this.setState({
            activeItem: item
          })}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    activeItem: PropTypes.any
  };

  return WithActiveItem;
};

export default withActiveItem;
