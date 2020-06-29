const Product = require('../models/product');

const getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', { 
            prods: products, 
            pageTitle: 'All Products', 
            path: '/products', 
        });
    });
};

const getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    console.log(Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            pageTitle: 'Product Detail',
            path: '/products',
            product: product,
        });
    }));
};

const getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', { 
            prods: products, 
            pageTitle: 'Shop', 
            path: '/', 
        });
    });
};

const getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart',
    })
};

const getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout',
    })
};

const getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders',
    })
};

exports.getProducts = getProducts;
exports.getProduct = getProduct;
exports.getIndex = getIndex
exports.getCart = getCart;
exports.getCheckout = getCheckout;
exports.getOrders = getOrders;