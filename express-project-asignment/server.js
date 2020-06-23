const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const homeRoute = require('./routes/home');
const userRoute = require('./routes/user');

//Middleware

app.use('/', (req, res, next) => {
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use(homeRoute);

app.use(userRoute);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000);