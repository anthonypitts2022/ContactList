//==============================================================================
//                  _        _   _
//  _ __ ___  _   _| |_ __ _| |_(_) ___  _ __
// | '_ ` _ \| | | | __/ _` | __| |/ _ \| '_ \
// | | | | | | |_| | || (_| | |_| | (_) | | | |
// |_| |_| |_|\__,_|\__\__,_|\__|_|\___/|_| |_|
//
//==============================================================================
/*
!Title : perms-Mutation
!Auth  : Anthony Pitts
!Vers  : 1.0
!Desc  : Contains All mutations for Contacts service
*/

//==============================================================================
// HEAD
//==============================================================================

//---------------------------------
// Modules
//---------------------------------
const bcrypt = require("bcrypt");
const { handleErrors } = require("../../utils/handle-errors.js");
const isMongodbid = require("../../utils/is-mongodbid");
const config = require("../../../config/config.js");
const { logger } = require("app-root-path").require("/config/logger.js");
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
var fs = require('fs');
const path = require("path");
const axios = require("axios");
const os = require('os');
const shortid = require("shortid");

//---------------------------------
// Models
//---------------------------------

const Contact = require("../../models/Contact-model.js");

//==============================================================================
// Body
//==============================================================================


//==============================================================================
// Create A Contact
//==============================================================================

// @access : Private, User
// @desc   : Create a Contact Object
const createContactMutation = async (parent, { input }, {user}) => {

  try {

    // Create a Contact object based on the input
    var newContact = new Contact({
      firstName: input.firstName,
      fileId: input.fileId,
      fileType: input.fileType,
      lastName: input.lastName,
      phoneNumber: input.phoneNumber,
      email: input.email,
    });
    newContact.save();

    return newContact;
    // Initiate sending the new Contact to the database
  } catch (err) {
    // Database response after Contact has been created
    console.log(err);
  }
};


//==============================================================================
// Delete All Contacts
//==============================================================================

// @access : Private, User
// @desc   : Delete all Contact Objects
const deleteAllContactsMutation = async (parent, { isActual }, {user}) => {
  try{
    await Contact.deleteMany();
    return true;
  } catch (err) {
    // Database response after Contact has failed to be deleted
    console.log(err);
    return false;
  }
};


//==============================================================================
// Delete A Contact
//==============================================================================

// @access : Private, User
// @desc   : Delete a Contact Objects
const deleteAContactMutation = async (parent, { input }, {user}) => {
  try{
    //await Contact.findById(id).remove().exec();
    await Contact.findByIdAndRemove(input.id);
    return true;
  } catch (err) {
    // Database response after Contact failed to delete
    console.log(err);
    return false;
  }
};

//==============================================================================
// Edit A Contact
//==============================================================================

// @access : Private, User
// @desc   : Edit a Contact Object
const editContactMutation = async (parent, { input }, {user}) => {

  try {
    var newContact = await Contact.findByIdAndUpdate( input.id,
      {
        $set: {
          firstName: input.firstName,
          lastName: input.lastName,
          phoneNumber: input.phoneNumber,
          email: input.email,
          fileId: input.fileId,
          fileType: input.fileType
        }
      }
    );
    console.log(newContact);
    return newContact;

  } catch (err) {
    // Database response after Contact has been created
    console.log(err);
  }
};


module.exports = {
  createContactMutation,
  deleteAllContactsMutation,
  deleteAContactMutation,
  editContactMutation
};
