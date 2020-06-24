const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('../routes/admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    //res.send('<h1>Hello From Express</h1>');
    const products = adminData.products; 
    console.log(adminData.products);
    //res.sendFile(path.join(rootDir,'views', 'shop.html'));//Path must be absolute but if you use '/', that'd be the root directory of the OS.
    //Thus, we use the path core module. Path.join() takes in arguments and takes strings. Path.join() detects OS and constructs path accordingly.
    res.render('shop', {prods: products, docTitle: 'Shop'});//Data is passed in render as a JavaScript Object so we can reference the key in .pug file
});

module.exports = router;
//This data in the products file is inherent to the server hence when another request comes in, it'll still hold the data from all the other
//users. Sometimes this is what we want but it can create vulnerabilities.