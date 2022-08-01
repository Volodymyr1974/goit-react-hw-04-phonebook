import React, { useState, useEffect, useRef } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import style from './App.module.css';


function App() {
  const [contacts, setContacts] = useState(
    () => {
      return JSON.parse(localStorage.getItem('contacts')) ??
        [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },];
    });
  const [filter, setFilter] = useState("");
  const isFirstRender = useRef(true);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    ) ?
      (alert(`${name} is already in contacts`)) :
      setContacts(s => [contact, ...s]);

  };


  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value)
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  const vizibleContacts = getVisibleContacts();

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log(`hello componentDidUpdate  + ${Date.now()}`);
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={style.box}>
      <h1>Phonebook</h1>
      <ContactForm
        onSubmit={addContact} />
      <h2>Contacts</h2>

      <Filter
        filterValue={filter}
        onChangeFilter={changeFilter}
      />

      <ContactList
        contacts={vizibleContacts}
        onDeleteContact={deleteContact}
      />

    </div>

  );

}


export default App;