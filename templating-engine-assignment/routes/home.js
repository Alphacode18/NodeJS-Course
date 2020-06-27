const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended:true }));

let users = [];

router.get('/', (request, response, next) => {
    response.render('home.ejs', {
        pageTitle: 'Home',
        path: '/',
    }); 
});

router.post('/', (request, response, next) => {
    response.redirect('/users');
    users.push(request.body.name);
});

exports.router = router;
exports.users = users;