import React from 'react';
import CreateContactForm from '../components/createContactForm.jsx';
import MyContactsBar from '../components/myContactsBarWithoutAdd.jsx';

const AddContactPage = () => (
  <li key="addContactPage">
    <MyContactsBar key="1"/>
    <CreateContactForm key={"CreateContact"} />
  </li>
);

export default AddContactPage;
