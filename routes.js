const express = require('express');
const router = express.Router();
const Note = require('./models/note');
// remember pagination

router.get('/test', (req, res) => {
    // const result = await Note();
    res.json({ test: 'this is a test route' });
});


router.get('/', (req, res) => {
    res.json({ test: 'latest change'});
});

router.get('/jobs', (req, res) => {
    res.json({ test: 'all jobs avaliable'});
});

router.post('/create', (req, res) => {
    res.json({ test: 'creates a new job'});
});



module.exports = router;