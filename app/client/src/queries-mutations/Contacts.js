import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ContactBox from '../components/contactBox.jsx';


const Contacts = () => (
  <Query
    query={gql`
      {
        getAllContacts{
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
      if (error) return <p>Error :(</p>;
      return(
        <div>
          {data.getAllContacts.map(contactInfo => (
            <div key={contactInfo.id}>
              <ContactBox contactInfo={contactInfo}/>
              <p></p>
            </div>
          ))}
        </div>
      );
    }}
  </Query>
);
export default Contacts;
