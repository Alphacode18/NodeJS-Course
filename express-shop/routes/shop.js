const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('../routes/admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    //res.send('<h1>Hello From Express</h1>'); 
    console.log(adminData.products);
    res.sendFile(path.join(rootDir,'views', 'shop.html'));//Path must be absolute but if you use '/', that'd be the root directory of the OS.
    //Thus, we use the path core module. Path.join() takes in arguments and takes strings. Path.join() detects OS and constructs path accordingly.
});

module.exports = router;
//This data in the products file is inherent to the server hence when another request comes in, it'll still hold the data from all the other
//users. Sometimes this is what we want but it can create vulnerabilities.