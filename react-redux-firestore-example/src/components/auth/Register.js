import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

import { notifyUser } from '../../actions/notifyAction';
import Alert from '../layout/Alert';

class Register extends Component {
  state = {
    email: '',
    password: '',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      settings: { allowRegistration },
    } = nextProps;

    if (!allowRegistration) {
      nextProps.history.push('/');
      return false;
    }
    return true;
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { firebase, notifyUser } = this.props;

    firebase
      .createUser({ email, password })
      .catch(err => notifyUser('That User Already Exists', 'error'));
  };

  render() {
    const { notify } = this.props;
    const { email, password } = this.state;

    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              {notify.message ? <Alert {...notify} /> : null}
              <h1 className="text-center pb-4 pt-3">
                <span className="text-primary">
                  <i className="fas fa-lock" /> Register
                </span>
              </h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    required
                    value={email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    value={password}
                    onChange={this.onChange}
                  />
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  firebase: PropTypes.object.isRequired,
  notify: PropTypes.object.isRequired,
  notifyUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ notify, settings }) => ({ notify, settings });

const mapDispatchToProps = { notifyUser };

export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Register);
