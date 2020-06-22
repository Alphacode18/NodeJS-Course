const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    //res.send('<h1>Hello From Express</h1>'); 
    res.sendFile(path.join(__dirname, '../','views', 'shop.html'));//Path must be absolute but if you use '/', that'd be the root directory of the OS.
    //Thus, we use the path core module. Path.join() takes in arguments and takes strings. Path.join() detects OS and constructs path accordingly.
});

module.exports = router;