import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Form from './Form';

const Contacts = ({ contacts, addContact, removeContact }) => (
  <div>
    <List contacts={contacts} removeContact={removeContact} />
    <Form addContact={addContact} />
  </div>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired, phone: PropTypes.string.isRequired }),
  ).isRequired,
  addContact: PropTypes.func.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default Contacts;
