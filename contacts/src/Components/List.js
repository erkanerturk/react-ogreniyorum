import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './List.css';

const propTypes = {
  contacts: PropTypes.array.isRequired,
};

class List extends Component {
  constructor() {
    super();
    this.onChangeFilterText = this.onChangeFilterText.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  state = { filterText: '' };

  onChangeFilterText(e) {
    this.setState({ filterText: e.target.value });
  }

  removeContact(e) {
    const contact = {};
    Array.from(e.target.children)
      .filter(child => child.className === 'name' || child.className === 'phone')
      .forEach(element => (contact[element.className] = element.innerText));

    this.props.removeContact(contact);
  }

  render() {
    const filteredContacts = this.props.contacts.filter(
      contact => contact.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1,
    );

    const contactsList = filteredContacts.map(contact => (
      <li key={contact.phone} onClick={this.removeContact}>
        <span className="name">{contact.name}</span>
        <span className="phone">{contact.phone}</span>
        <span className="clearfix" />
      </li>
    ));

    return (
      <div className="listArea">
        <input
          value={this.state.filterText}
          onChange={this.onChangeFilterText}
          name="filter"
          id="filter"
          placeholder="Filter by phone or phone"
        />
        <ul className="list">{contactsList}</ul>
      </div>
    );
  }
}

List.propTypes = propTypes;

export default List;
