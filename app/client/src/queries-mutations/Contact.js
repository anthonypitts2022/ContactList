import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import EditContactForm from '../components/editContactForm.jsx';



function Contact (props) {

  return (
    <Query
      query={gql `
      query contact{
        Contact: contact(id: "${props.contactId}"){
          id
          firstName
          lastName
          email
          phoneNumber
          fileId
          fileType
          errors{
            msg
          }
        }
      }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>${error.message} :(</p>;
        return(
          <div>
            <div key={data.Contact.id}>
              <EditContactForm contactInfo={data.Contact}/>
            </div>
          </div>
        );
      }}
    </Query>
  );
}


export default Contact;
