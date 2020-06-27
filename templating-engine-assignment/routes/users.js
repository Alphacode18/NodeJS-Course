const express = require('express');

const router = express.Router();

router.get('/users', (request, response, next) => {
    response.render('users', {
        pageTitle: 'Users',
    });
});

module.exports = router;