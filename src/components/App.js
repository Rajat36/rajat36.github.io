import React, { useState , useEffect } from 'react';
import './App.css';
import Header from './Header';
import {uuid} from 'uuidv4'
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactCard from './ContactCard';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

//  const contacts = [
//    {
//       id:"1",
//       "name":"Utkarsh",
//       "email":"utkarsh@gmail.com",
//    },
//    {
//     id:"2",
//     "name":"Rajat",
//     "email":"Rajat@gmail.com",
//  },
//  ];

  const addContactHandler = (contact)=>{
    setContacts([...contacts, {id: uuid(), ...contact}]);
  }

  const removeContactHandler = (id)=>{
    const newContactList = contacts.filter((contact) =>{
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts)setContacts(retriveContacts);
   }, []);

  useEffect(()=>{
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts}  getContactId={removeContactHandler} key={contacts.id} />

    </div>
  );
}

export default App;
