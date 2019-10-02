//==============================================================================
// _           _                                 _
// (_)_ __   __| | _____  __  _ __ ___  ___  ___ | |_   _____ _ __
// | | '_ \ / _` |/ _ \ \/ / | '__/ _ \/ __|/ _ \| \ \ / / _ \ '__|
// | | | | | (_| |  __/>  <  | | |  __/\__ \ (_) | |\ V /  __/ |
// |_|_| |_|\__,_|\___/_/\_\ |_|  \___||___/\___/|_| \_/ \___|_|
//
//==============================================================================
/*
Title: Index resolver
Auth: Anthony Pitts
Vers: 1.1
desc: Main resolvers component
*/

//==============================================================================
// HEAD
//==============================================================================
const { handleErrors } = require("../../utils/handle-errors.js");

// contacts Queries Library
const {
  getAllContactsQuery,
} = require("./contacts-queries.js");



// contacts Mutation Library
const {
  createContactMutation,
  deleteAllContactsMutation,
  deleteAContactMutation,
  editContactMutation
} = require("./contacts-mutations.js");

//==============================================================================
// BODY
//==============================================================================

//---------------------------------
// Queries
//---------------------------------

const Query = {
  getAllContacts: getAllContactsQuery
};

//---------------------------------
// Mutations
//---------------------------------

const Mutation = {
  createContact: createContactMutation,
  deleteAllContacts: deleteAllContactsMutation,
  deleteAContact: deleteAContactMutation,
  editContact: editContactMutation
};


//==============================================================================
// !EXPORTS
//==============================================================================

//module.exports = { Query, Mutation };
module.exports = { Query, Mutation };
