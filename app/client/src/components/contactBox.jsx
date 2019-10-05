import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Image } from 'react-native';
import axios from 'axios';


//import EditContactPage from '../components/editContactPage.jsx';



class ContactBox extends Component {

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
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

  }



  handleDelete(event) {
    //bindings
    deleteContact = deleteContact.bind(this);

    //uploads file to server
    var input = { id: this.state.id };
    deleteContact(input);
    async function deleteContact( input ) {
      try{
        var response = await axios.post("http://localhost:3301/delete", input);
        var result = response.data.deleteAContact;

        //if no errors when creating post
        if(result===true){
          window.location.href = "/";
        }
      }
      catch(err) {
        console.log(err);
      }
    }
  }

  handleEdit(event){
    window.location.href = "/editcontact/"+this.state.id;
  }

  render(){
    return(
      <div>
        <div className="container py-3">
          <div className="card">
            <div className="row ">
              <div className="col-md-4">
                <Image
                  source={{uri: this.state.fileURL}}
                  style={{width: 120, height: 120, borderRadius: 120/ 2}}
                />
                </div>
                <div className="col-md-8 px-3">
                  <div className="card-block px-3">
                    <h4 className="card-title">{this.state.firstName +" "+ this.state.lastName}</h4>
                    <p className="card-text">{this.state.phoneNumber}</p>
                    <p className="card-text">{this.state.email}</p>
                    <a onClick={this.handleEdit} className="btn btn-primary">Edit</a>
                    <a> </a>
                    <a onClick={this.handleDelete} className="btn btn-primary px-3">Delete</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
    );
  }



}

export default ContactBox;
