import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

import { notifyUser } from '../../actions/notifyAction';
import Alert from '../layout/Alert';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { firebase, notifyUser, history } = this.props;

    firebase
      .login({
        email,
        password,
      })
      .then(() => history.push('/'))
      .catch(err => notifyUser('Invalid Login Credentials', 'error'));
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
                  <i className="fas fa-lock" /> Login
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
                <input type="submit" value="Login" className="btn btn-primary btn-block" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired,
  notify: PropTypes.object.isRequired,
  notifyUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ notify: state.notify });

const mapDispatchToProps = { notifyUser };

export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Login);
