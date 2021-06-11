const express = require('express');
const router = express.Router();
const Job = require('./models/job');
const uuid = require('uuid');
const lodash = require('lodash');
// remember pagination


router.get('/jobs', async (req, res) => {
    const result = await Job.find({ description: { $exists: true }, title: { $exists: true } });
    res.json(result);
});

router.patch('/create', async (req, res) => {
    try {
        if (!((lodash.isEmpty(req.body.title)) &&
            (lodash.isEmpty(req.body.description) &&
                (lodash.isEmpty(req.body.categories)) &&
                (lodash.isEmpty(req.session.id))))) {
            const job = await Job.updateOne(// This doesn't work, reason unknown
                { uuid: req.session.id }, {
                title: req.body.title,
                categories: req.body.categories,
                description: req.body.description
            });

            if (job == null) {
                res.sendStatus(404);
            }
            res.sendStatus(200);
        }

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.post('/login', async (req, res) => {
    try {
        let job = await Job.findOne({
            username: req.body.username,
            password: req.body.password
        });

        if (job == null) {
            res.sendStatus(404);
        }else {
        res.sendStatus(200);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});


router.post('/register', async (req, res) => {
    try {
        req.session.id = uuid.v4();
        if (!(lodash.isEmpty(req.session.username) &&
            lodash.isEmpty(req.session.password))) {
            const job = new Job({
                username: req.body.username,
                password: req.body.password,
                identifier: req.session.id
            });
            const result = await job.save();
        }
    } catch (err) {
        console.log(err);
    }
    res.sendStatus(200);
});


router.get('/destroy', (req, res) => {
    req.session.destroy();
});

module.exports = router;