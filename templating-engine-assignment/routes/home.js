const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('home.ejs', {
        pageTitle: 'Home',
        path: '/',
    });
});

module.exports = router;