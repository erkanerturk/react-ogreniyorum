import React from 'react';
import { Link } from 'react-router-dom';

const ClientTable = props => {
  const { clients } = props;

  return (
    <table className="table table-striped">
      <thead className="thead-inverse">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Balance</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {clients &&
          clients.map(client => (
            <tr key={client.id}>
              <td>
                {client.firstName} {client.lastName}
              </td>
              <td>{client.email}</td>
              <td>${parseFloat(client.balance).toFixed(2)}</td>
              <td>
                <Link to={`client/${client.id}`} className="btn btn-secondary btn-sm">
                  <i className="fas fa-arrow-circle-right" /> Details
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ClientTable;
