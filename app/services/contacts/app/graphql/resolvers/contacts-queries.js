//==============================================================================
//   __ _ _   _  ___ _ __ _   _
//  / _` | | | |/ _ \ '__| | | |
// | (_| | |_| |  __/ |  | |_| |
//  \__, |\__,_|\___|_|   \__, |
//     |_|                |___/
//
//==============================================================================
/*
!Title : perms-queries
!Auth  : Anthony Pitts
!Vers  : 1.0
!Date  : 7/13/19 *Last Mod
!Desc  : Conatins all the queries for contacts service
*/

//==============================================================================
// Head
//==============================================================================
//---------------------------------
// Modules
//---------------------------------
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { handleErrors } = require("../../utils/handle-errors.js");
const config = require("../../../config/config.js");
const { logger } = require("app-root-path").require("/config/logger.js");
const { PostsDateSort } = require("../../utils/PostsArrDateSort.js");

//---------------------------------
// Models
//---------------------------------

const Contact = require("../../models/Contact-model.js");


//==============================================================================
// Body
//==============================================================================


const getAllContactsQuery = async (root, { args }) => {
  try{
    const contacts = await Contact.find()
      .skip(0)
      .limit(200);

    return PostsDateSort(contacts);

  } catch (e) {
    logger.error(e.message);
  }
};


module.exports = {
  getAllContactsQuery,
};
