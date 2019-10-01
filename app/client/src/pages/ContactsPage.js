import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import MyContactsBar from '../components/myContactsBar.jsx';
import Contacts from '../queries-mutations/Contacts.js'

const contactsClient = new ApolloClient({
  uri: "http://localhost:3301/contacts"
});

const Feed = () => (
  <li key="feed">
    <MyContactsBar key={"myContactsBar"} />
    <ApolloProvider client={contactsClient}>
      <Contacts key={"contacts"} />
    </ApolloProvider>
  </li>
);

export default Feed;
