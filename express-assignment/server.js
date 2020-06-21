const express = require('express');
const app = express();

//Middleware

app.use('/', (req, res, next) => {
    next();
})

app.use('/users', (req, res, next) => {
    res.send("<h1>Welcome To The Secret Life Of Shreyas Kharbanda</h1>");
})

app.use('/', (req, res, next) => {
    res.send("<h1>Express Server Executed</h1>");
});

app.listen(3000);