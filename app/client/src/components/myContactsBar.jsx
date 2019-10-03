import React, { Component } from 'react';

class MyContactsBar extends Component {

  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" >My Contacts</a>
        <a className="btn btn-outline-success my-2 my-sm-0" href="/addcontact" role="button">Add Contact</a>
      </nav>
    );
  }


}

export default MyContactsBar;
