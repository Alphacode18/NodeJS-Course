const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

// : signals to express that we are dealing with dynamic paths. Always order routes in specificity. Thus dynamic routes should be at the end.

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart)

router.get('/checkout', shopController.getCheckout);

router.get('/orders', shopController.getOrders);

module.exports = router;
//This data in the products file is inherent to the server hence when another request comes in, it'll still hold the data from all the other
//users. Sometimes this is what we want but it can create vulnerabilities.