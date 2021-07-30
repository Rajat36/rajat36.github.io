// funclional react component

// import { render } from '@testing-library/react';
import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
const deleteContactHandlet = (id)=>{
    props.getContactId(id);
}
   const renderContactList = props.contacts.map((contact) => {
       return (
           <ContactCard contact = {contact} clickHandler = {deleteContactHandlet} />
       )
   })

    return(
        <div className="ui celled list">
           {renderContactList}
        </div>
    )
};

export default ContactList;