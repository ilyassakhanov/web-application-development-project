const express = require('express');
const router = express.Router();
const Job = require('./models/job');
// remember pagination

router.get('/test', (req, res) => {
    res.json({ test: 'this is a test route' });
});


router.get('/', (req, res) => {
    res.json({ test: 'latest change' });
});

router.get('/jobs', (req, res) => {
    res.json({ test: 'all jobs avaliable' });
});

router.post('/create', (req, res) => {
    res.json({ test: 'creates a new job' });
});

router.post('/login', (req, res) => {
    res.json({ test: 'used for a login' });
});

router.get('/register', (req, res) => { // doesn't work
    res.render('public/register');
});

router.post('/register', async (req, res) => {
    if ((req.body.username != null || req.body.username != "") && (req.body.password != null || req.body.password != "")) {
        const job = new Job({
            username: req.body.username,
            password: req.body.password
        });
        const result = await job.save();
    }
});



module.exports = router;