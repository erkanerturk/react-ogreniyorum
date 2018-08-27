import React, { Component } from 'react';
import PropTypes from 'prop-types';

const inlineError = {
  color: '#f44336',
};

class InlineError extends Component {
  state = {
    isVisible: true,
  };

  componentDidMount() {
    this.setVisible();
  }

  componentWillReceiveProps() {
    this.setState({ isVisible: true });
    this.setVisible();
  }

  setVisible() {
    setTimeout(() => {
      this.setState({ isVisible: false });
    }, 3000);
  }

  render() {
    return this.state.isVisible && <div style={inlineError}>{this.props.message}</div>;
  }
}

InlineError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default InlineError;
