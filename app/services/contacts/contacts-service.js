process.env.NODE_ENV = process.NODE_ENV || "development";
const rootPath = require("app-root-path");
require("module-alias/register");
const { logger } = require("@lib/logger.js");
const mongoose = require("./config/mongoose.js");
const express = require("./config/express.js");
const multer = require('multer');
const { createApolloFetch } = require('apollo-fetch');
const shortid = require("shortid");
var path = require('path');

const db = mongoose();
const app = express();
const port = process.env.PORT || 3301;



//============  Uploading images with contacts   ====================//

app.route('/upload').post(function(req, res) {

  //generates the image file id
  const fileId = shortid.generate();

  var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "uploads")
      },
      filename: function (req, file, cb) {
        //console.log(file);
        //if no file was provided
        //if(file==undefined){
        //  cb(null, null);
        //}
        //else{
          cb(null, fileId + path.extname(file.originalname) );
        //}
      }
  });

  var upload = multer({ storage: storage }).single('file');

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
       res.status(500).send({errors: err});
    } else if (err) {
       console.log(err)
       res.status(500).send({errors: err});
    }
    //if no file was provided/uploaded
    if(req.file==undefined){
      return res.status(200).send({errors: "contact must include a file. No file was provided."})
    }

    //if no errors on uploading file, proceed to create contact

    //calls create contact database mutation
    var fetch = createApolloFetch({
      uri: "http://localhost:3301/contacts"
    });
    //binds the res of upload to fetch to return the fetch data
    fetch = fetch.bind(res)
    fetch({
      query:
      `
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
      `,
      variables: {
        input: {
           firstName : req.body.firstName,
           lastName : req.body.lastName,
           phoneNumber : req.body.phoneNumber,
           email : req.body.email,
           fileId : fileId,
           fileType : path.extname(req.file.originalname)
         }
      }
  })
  .then(result => {
    //result.data holds the data returned from the createContact mutation
    return res.status(200).send(result.data.Contact);
  })
  })
});

//=========================================================================//



//============  get contact mutation call   ====================//

app.route('/querycontact').post(function(req, res) {


  //calls create like database mutation
  var fetch = createApolloFetch({
    uri: "http://localhost:3301/contacts"
  });
  //binds the res of upload to fetch to return the fetch data
  fetch = fetch.bind(res)
  fetch({
    query:
    `
    query getAContact($input: getContactInput!){
      Contact: getAContact(input: $input){
        errors{
          msg
        }
        fileId
        fileType
        userId
        id
        caption
        likeCount
        dislikeCount
        comments{
          text
          userId
        }
      }
    }
    `,
    variables: {
      input: {
        contactId: req.body.input.contactId
      }
    }
  })
  .then(result => {
    //result.data.contact holds the data returned from the getAcontact mutation
    return res.status(200).send(result.data.Contact);
  })
});

//=========================================================================//

//============  Serving files of contacts   ====================//


app.route("/file/:fileId/:extension").get(function (req, res) {
  res.sendFile(req.params.fileId + req.params.extension, { root: "./uploads"});
});


//============================================================//


app.listen(port, () => logger.info(`contacts service started on port ${port}`));
