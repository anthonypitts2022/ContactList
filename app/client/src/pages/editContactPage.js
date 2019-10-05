import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Contact from '../queries-mutations/Contact.js'
import MyContactsBar from '../components/myContactsBarWithoutAdd.jsx';


const contactsClient = new ApolloClient({
  uri: "http://localhost:3301/contacts"
});


class EditContactPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: props.match.params.id
    }

  }

    render(){
      return(
        <ApolloProvider client={contactsClient}>
          <MyContactsBar key="1"/>
          <Contact key={"contact"} contactId={this.state.id}/>
        </ApolloProvider>
      );
    }
}


export default EditContactPage;
