import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

import ClientTable from './ClientTable';
import Loader from '../layout/Loader';

class Clients extends Component {
  state = {
    totalOwed: null,
  };

  static getDerivedStateFromProps(props) {
    const { clients } = props;

    if (clients) {
      // Add balances
      const total = clients.reduce((total, client) => {
        return total + parseFloat(client.balance.toString());
      }, 0);
      return { totalOwed: total };
    }

    return null;
  }

  render() {
    const { clients } = this.props;
    const { totalOwed } = this.state;

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-users" />
                Clients{' '}
              </h2>
            </div>
            <div className="col-md-6">
              <h5 className="text-right text-secondary">
                Total Owed <span className="text-primary">${parseFloat(totalOwed).toFixed(2)}</span>
              </h5>
            </div>
          </div>
          <ClientTable clients={clients} />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array,
};

const mapStateToProps = state => ({
  clients: state.firestore.ordered.clients,
});

export default compose(
  firestoreConnect([{ collection: 'clients' }]),
  connect(mapStateToProps),
)(Clients);
