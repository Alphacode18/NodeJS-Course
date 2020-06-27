const path = require('path');

const express = require('express');
const productsController = require('../controllers/products');

const router = express.Router();

router.get('/add-product', productsController.getAddProduct);

router.post('/product', (req, res, next) => {
    res.redirect('/');
});

router.post('/add-product', productsController.postAddProduct);

//Multiple exports from same file.
module.exports = router;
