import React, { Component } from 'react';
import '../App.css';
import Contacts from './Contacts';

class App extends Component {
  constructor() {
    super();
    this.addContact = this.addContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  state = {
    contacts: JSON.parse(localStorage.getItem('contacts')) || [],
  };

  addContact(contact) {
    if (this.isHaveSamePhoneNumber(contact.phone)) {
      return;
    }
    const { contacts } = this.state;
    contacts.push(contact);
    this.setState({ contacts });
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  removeContact(contact) {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    const filteredContacts = contacts.filter(element => element.phone !== contact.phone);
    this.setState({ contacts: filteredContacts });
    localStorage.setItem('contacts', JSON.stringify(filteredContacts));
  }

  isEmptyContacts() {
    return localStorage.getItem('contacts') === null;
  }

  isHaveSamePhoneNumber(phone) {
    let isHave = false;
    if (!this.isEmptyContacts()) {
      JSON.parse(localStorage.getItem('contacts')).forEach(contact => {
        if (contact.phone === phone) {
          isHave = true;
        }
      });
    }
    return isHave;
  }

  render() {
    return (
      <div className="App">
        <Contacts
          contacts={this.state.contacts}
          addContact={this.addContact}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
