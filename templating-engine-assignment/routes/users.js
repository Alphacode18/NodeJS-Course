const express = require('express');

const router = express.Router();
const homeData = require('./home');

router.get('/users', (request, response, next) => {
    response.render('users', {
        pageTitle: 'Users',
        users: homeData.users,
        path: '/users',
    });
});

module.exports = router;