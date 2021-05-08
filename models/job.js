const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true
  }, 
  password: {
    type: String,
    required: true
  },
  title : {
    type: String
  },
  description: {
    type: String
  } // add categories field
  
});
  
module.exports = mongoose.model('Note', noteSchema, 'notes');
  