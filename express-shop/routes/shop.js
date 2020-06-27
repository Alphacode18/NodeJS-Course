const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;
//This data in the products file is inherent to the server hence when another request comes in, it'll still hold the data from all the other
//users. Sometimes this is what we want but it can create vulnerabilities.