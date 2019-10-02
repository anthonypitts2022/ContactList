//==============================================================================
//                      _      _
//  _ __ ___   ___   __| | ___| |
// | '_ ` _ \ / _ \ / _` |/ _ \ |
// | | | | | | (_) | (_| |  __/ |
// |_| |_| |_|\___/ \__,_|\___|_|
//
//==============================================================================
/*
!Title : Contact-model
!Auth  : Anthony Pitts
!Vers  : 1.0
!Desc  : Sets up the Contact schema
*/

//==============================================================================
// HEAD
//==============================================================================

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require("shortid");

//==============================================================================
// BODY
//==============================================================================

const ContactSchema = new Schema({
    _id: {
      type: String,
      default: shortid.generate,
      description: "The id of the Contact"
    },
    firstName: {
      type: String,
      description: "The contact's first name"
    },
    lastName: {
      type: String,
      description: "The contact's last name"
    },
    phoneNumber: {
      type: String,
      description: "The contact's phone number"
    },
    email: {
      type: String,
      description: "The contact's email"
    },
    date: {
      type: Date,
      default: Date.now
    },
    fileId: {
      type: String,
      description: "The id of the Contact file content"
    },
    fileType: {
      type: String,
      description: "The type (extension) of the Contact file content"
    }
});



//==============================================================================
// !EXPORT
//==============================================================================

ContactSchema.index({
  index: "text",
  id: "text",
  firstName: "text",
  lastName: "text",
  fileId: "text",
  fileType: "text",
  email: "text",
  phoneNumber: "text",
});

module.exports = Contact = mongoose.model("Contact", ContactSchema);
