import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  setDisableBalanceOnAdd,
  setDisableBalanceOnEdit,
  setAllowRegistration,
} from '../../actions/settingsAction';

class Settings extends Component {
  allowRegistrationChange = () => this.props.setAllowRegistration();

  disableBalanceOnAddChange = () => this.props.setDisableBalanceOnAdd();

  disableBalanceOnEditChange = () => this.props.setDisableBalanceOnEdit();

  render() {
    const {
      settings: { disableBalanceOnAdd, disableBalanceOnEdit, allowRegistration },
    } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back To Dashboard
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">aa</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Allow Registration</label>{' '}
                <input
                  type="checkbox"
                  name="allowRegistration"
                  checked={!!allowRegistration}
                  onChange={this.allowRegistrationChange}
                />
              </div>
              <div className="form-group">
                <label>Disable Balance On Add</label>{' '}
                <input
                  type="checkbox"
                  name="allowRegistration"
                  checked={!!disableBalanceOnAdd}
                  onChange={this.disableBalanceOnAddChange}
                />
              </div>
              <div className="form-group">
                <label>Disable Balance On Edit</label>{' '}
                <input
                  type="checkbox"
                  name="allowRegistration"
                  checked={!!disableBalanceOnEdit}
                  onChange={this.disableBalanceOnEditChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  setDisableBalanceOnAdd: PropTypes.func.isRequired,
  setDisableBalanceOnEdit: PropTypes.func.isRequired,
  setAllowRegistration: PropTypes.func.isRequired,
};

const mapStateToProps = ({ settings, firebase: { auth } }) => ({ auth, settings });

const mapDispatchToProps = {
  setDisableBalanceOnAdd,
  setDisableBalanceOnEdit,
  setAllowRegistration,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
