const path = require('path');

const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

router.post('/product', (req, res, next) => {
    res.redirect('/');
});

router.post('/add-product', adminController.postAddProduct);

//Multiple exports from same file.
module.exports = router;
