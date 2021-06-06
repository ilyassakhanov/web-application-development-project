const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  categories: {
    type: Array
  }
});

module.exports = mongoose.model('Job', jobSchema, 'jobs');
