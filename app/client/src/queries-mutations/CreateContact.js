import gql from "graphql-tag";


const CreateContact = gql`
  mutation createContact($input: createContactInput){
    Contact: createContact(input: $input){
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
`;

export default CreateContact;
