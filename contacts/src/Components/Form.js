import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  addContact: PropTypes.func.isRequired,
};

class Form extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = { name: '', phone: '' };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addContact({ ...this.state });
    this.setState({
      name: '',
      phone: '',
    });
  }

  render() {
    const { name, phone } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            name="name"
            id="name"
            value={name}
            onChange={this.onChange}
            placeholder="Enter a name"
          />
          <br />
          <input
            name="phone"
            id="phone"
            value={phone}
            onChange={this.onChange}
            placeholder="Enter a phone"
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = propTypes;

export default Form;
