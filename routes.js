const express = require('express');
const router = express.Router();
const Note = require('./models/note');

router.get('/', async (req, res) => {
    const result = await Note();
    
})