import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import style from './App.module.css';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    console.log('hello componentDidMount');
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      console.log('hello 2componentDidMount', parsedContacts);
      this.setState({ contacts: parsedContacts });
    };

  };
  componentDidUpdate(prevProps, prevState) {
    console.log('hello componentDidUpdate');

    if (prevState.contacts !== this.state.contacts) {
      console.log('hello componentDidUpdate', prevState.contacts);
      console.log('hello componentDidUpdate', this.state.contacts);
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    };
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    ) ?
      (alert(`${name} is already in contacts`)) :
      (this.setState(({ contacts }) => {
        return {
          contacts: [contact, ...contacts],
        };
      })
      )
  };

  deleteContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }))
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    // console.log(this.state);
    const { filter } = this.state;

    const vizibleContacts = this.getVisibleContacts();

    return (
      <div className={style.box}>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact} />
        <h2>Contacts</h2>

        <Filter
          filterValue={filter}
          onChangeFilter={this.changeFilter}
        />

        <ContactList
          contacts={vizibleContacts}
          onDeleteContact={this.deleteContact}
        />

      </div>

    );

  };

};
export default App;