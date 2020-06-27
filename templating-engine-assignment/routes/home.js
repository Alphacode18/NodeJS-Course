const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('home.ejs', {
        pageTitle: 'Home',
        path: '/',
    });
});

router.post('/', (request, response, next) => {
    response.redirect('/users');
});

module.exports = router;