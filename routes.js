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

router.get('/jobs', async (req, res) => {
    const result = await Job.find({description: {$exists: true}, title: {$exists: true, $not: {$size: 0}}});
    res.json(result);
    res.status(200);
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
    try {
        if ((req.body.username != null || req.body.username != "") && (req.body.password != null || req.body.password != "")) {
            const job = new Job({
                username: req.body.username,
                password: req.body.password
            });
            req.session.username = req.body.username;
            const result = await job.save();
        }
    } catch (err) {
        console.log(err);
    }
});



module.exports = router;