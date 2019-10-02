import React, { Component } from 'react';
import { Image } from 'react-native'
import { Query, Mutation } from 'react-apollo';
import axios from 'axios';




class ContactBox extends Component {

  constructor(props){
    super(props);

    this.state = {
      fileId: (typeof props.contactInfo.fileId === 'undefined') ? "" : props.contactInfo.fileId,
      fileType: (typeof props.contactInfo.fileType === 'undefined') ? "" : props.contactInfo.fileType,
      contactId: (typeof props.contactInfo.id === 'undefined') ? "" : props.contactInfo.id,
      firstName: (typeof props.contactInfo.firstName === 'undefined') ? "" : props.contactInfo.firstName,
      lastName: (typeof props.contactInfo.lastName === 'undefined') ? "" : props.contactInfo.lastName,
      phoneNumber: (typeof props.contactInfo.phoneNumber === 'undefined') ? "" : props.contactInfo.phoneNumber,
      email: (typeof props.contactInfo.email === 'undefined') ? "" : props.contactInfo.email,
    };
  }


  render(){
    return(
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">

            <img className="card-img-top" src={"http://localhost:3301/file/" + this.state.fileId +"/"+this.state.fileType} ></img>
            <div className="card-body">
              <h5 className="card-title">{this.state.firstName +" "+ this.state.lastName}</h5>
              <h5 className="card-title">{this.state.phoneNumber}</h5>
              <h5 className="card-title">{this.state.email}</h5>
            </div>
          </div>

        </div>
      </div>
    );
  }



}

export default ContactBox;
