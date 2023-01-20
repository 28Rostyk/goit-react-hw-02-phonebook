import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const { Component } = require('react');

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  nameInputId = nanoid();

  addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </>
    );
  }
}

export default App;
