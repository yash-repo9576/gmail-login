import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App(session) {
  // console.log(session)
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContact] = useState([]);

  const addContactHandler = (contact) => {
    setContact([...contacts, {id: uuidv4(), ...contact }]);
    console.log(contact);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContact(newContactList);
  }

  // Read locally stored contacts
  useEffect(()=>{
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedContacts) setContact(storedContacts);
  },[])

  // store in local storage
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts])

  return (
    <div className="pb-2 bg-slate-200 h-screen"> 
      <Header session={session}/> 
      <AddContact addContactHandler={addContactHandler}/> 
      <ContactList contacts={contacts} getContactID={removeContactHandler}/> 
    </div>
  );
}

export default App;
