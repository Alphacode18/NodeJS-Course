const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

router.post('/users', (req, res, next) => {
    console.log(req.body);
    res.redirect('/registered');
})

router.get('/registered', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'registered.html'));
});

module.exports = router;