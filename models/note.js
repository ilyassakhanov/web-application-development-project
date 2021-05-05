const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({

  username: {
    type: String,
  }, 
  password: {
    type: String
  },
  
  
});
  
module.exports = mongoose.model('Note', noteSchema, 'notes');
  