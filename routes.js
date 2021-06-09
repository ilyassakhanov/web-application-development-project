const express = require('express');
const router = express.Router();
const Job = require('./models/job');
const uuid = require('uuid');
// remember pagination

router.get('/test', (req, res) => {
    res.json({ test: 'this is a test route' });
});


router.get('/', (req, res) => {
    res.json({ test: 'latest change' });
});

router.get('/jobs', async (req, res) => {
    const result = await Job.find({ description: { $exists: true }, title: { $exists: true } });
    res.json(result);
});

router.patch('/create', async (req, res) => {
    try {
        if ((req.body.title != null || req.body.title != "") &&
            (req.body.description != null || req.body.description != "") &&
            (req.body.categories != null || req.body.categories.lenghth > 0) &&
            (req.body.username != null || req.body.username != "")) {
            const result = await Job.updateOne({ username: req.body.username }, {
                title: req.body.title,
                categories: req.body.categories,
                description: req.body.description
            });


            if (result == null) {
                res.sendStatus(404);
            } else {
                res.sendStatus(200);
            }
        }

    } catch (err) {
        res.sendStatus(500);
    }
});

router.post('/login', (req, res) => {
    res.json({ test: 'used for a login' });
});

router.get('/register', (req, res) => { // doesn't work
    res.render('public/register');
});

router.post('/register', async (req, res) => {
    try {
        if ((req.body.username != null || req.body.username != "") &&
            (req.body.password != null || req.body.password != "")) {
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


router.patch('/register/start', async (req, res) => {
    try {
        var uniqueID = uuid.v4();
        req.session.id = uniqueID;
        console.log(req.body.username);
        console.log(uniqueID);
        if ((req.body.username != null || req.body.username != "") &&
            (req.body.password != null || req.body.password != "")) {
            const result = await Job.updateOne({ username: req.body.username }, {
                uuid: uniqueID
            });
        }
    } catch (err) {
        console.log(err);
    }
});


module.exports = router;