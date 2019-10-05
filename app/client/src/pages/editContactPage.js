import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Contact from '../queries-mutations/Contact.js'

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
          <Contact key={"contact"} contactId={this.state.id}/>
        </ApolloProvider>
      );
    }
}


export default EditContactPage;

/*








import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Image } from 'react-native';
import axios from 'axios';




class EditContactPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      fileId: (typeof props.contactInfo.fileId === 'undefined') ? "" : props.contactInfo.fileId,
      fileType: (typeof props.contactInfo.fileType === 'undefined') ? "" : props.contactInfo.fileType,
      id: (typeof props.contactInfo.id === 'undefined') ? "" : props.contactInfo.id,
      contactId: (typeof props.contactInfo.id === 'undefined') ? "" : props.contactInfo.id,
      firstName: (typeof props.contactInfo.firstName === 'undefined') ? "" : props.contactInfo.firstName,
      lastName: (typeof props.contactInfo.lastName === 'undefined') ? "" : props.contactInfo.lastName,
      phoneNumber: (typeof props.contactInfo.phoneNumber === 'undefined') ? "" : props.contactInfo.phoneNumber,
      email: (typeof props.contactInfo.email === 'undefined') ? "" : props.contactInfo.email,
      fileURL: "http://localhost:3301/file/" + props.contactInfo.fileId +"/"+props.contactInfo.fileType
    };

    //bindings
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }



    handleFirstNameChange(event) {
      this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event) {
      this.setState({lastName: event.target.value});
    }

    handlePhoneNumberChange(event) {
      this.setState({phoneNumber: event.target.value});
    }

    handleEmailChange(event) {
      this.setState({email: event.target.value});
    }

    handleFileChange(event) {
      this.setState({selectedFile: event.target.files[0]});
    }

    handleSubmit(event) {
      //bindings
      createContact = createContact.bind(this);

      //uploads file to server
      var fileData = new FormData();
      fileData.append('file', this.state.selectedFile);
      fileData.append('firstName', this.state.firstName);
      fileData.append('lastName', this.state.lastName);
      fileData.append('phoneNumber', this.state.phoneNumber);
      fileData.append('email', this.state.email);
      createContact(fileData);
      async function createContact( fileData ) {
        try{
          var response = await axios.post("http://localhost:3301/upload", fileData);

          //newContact holds the data of the newly created contact
          var newContact = response.data;

          //if no errors when creating post
          if(newContact.errors==null){
            window.location.href = "/";
          }
          //if errors were returned, then store them in errors field in the state
          else{
            this.setState({errors: newContact.errors.split("; ") });
          }
        }
        catch(err) {
          console.log(err);
        }
      }
    }


    render(){
      return(
        <div>
         <div className="container">
            <div className="col-md-6 mx-auto text-center">
               <div className="jumbotron">
                  <h1 className="wv-heading--title">
                     Create A Contact
                  </h1>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 mx-auto">
                  <div className="myform form ">
                     <form name="postUpload">
                        <div className="form-group">
                          <div className="custom-file mb-3">
                            <input type="file" name="file" id="file" onChange={this.handleFileChange} className="custom-file-input"/>
                            <label htmlFor="file" className="custom-file-label">Change Profile Picture</label>
                          </div>
                             <p></p>
                             <input onChange={this.handleFirstNameChange} type="firstName" name="firstName"  className="form-control my-input" id="firstName" placeholder="First Name" />
                             <p></p>
                             <input onChange={this.handleLastNameChange} type="lastName" name="lastName"  className="form-control my-input" id="lastName" placeholder="Last Name" />
                             <p></p>
                             <input onChange={this.handlePhoneNumberChange} type="phoneNumber" name="phoneNumber"  className="form-control my-input" id="phoneNumber" placeholder="Phone Number" />
                             <p></p>
                             <input onChange={this.handleEmailChange} type="email" name="email"  className="form-control my-input" id="email" placeholder="Email" />
                        </div>
                    </form>
                  </div>
                  <a type="submit" onClick={this.handleSubmit} className="btn btn-lg btn-primary btn-block">Submit</a>
                  <div>
                    {this.state.errors.map(error => (
                      <div key={error+"splitErrors"} >
                        <p key={error+"break"} ></p>
                        <div key={error} className="alert alert-danger" >{error}</div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
      );
    }



  }

  export default EditContactPage;
  */
