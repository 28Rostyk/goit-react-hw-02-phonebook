import { nanoid } from 'nanoid';

import css from './App.module.css';

const { Component } = require('react');

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  nameInputId = nanoid();

  addContact = name => {
    const contact = {
      name,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = e.currentTarget.elements;
    console.log(name);
    this.addContact(name.value);
    this.reset();
  };

  handleChange = e => {
    // console.log(e.currentTarget.value);
    this.setState({ name: e.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            className={css.input}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputId}
            onChange={this.handleChange}
          />
          <button>Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(({ name, id }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default App;
