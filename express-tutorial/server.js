/*
 * The extra logs you would see are generally because of the favicon requests by the browser.
 */

const http = require('http');

const express = require('express'); //Import Express.js

const app = express(); //Execute the function imported. This function does all the background set up for us regarding the object.

app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); //Important to push the user to next middleware.
}); //Request and Response are pretty self explanatory. Next is another function being passed to the current callback.

app.use((req, res, next) => {
    console.log('In another the middleware!');
    res.send('<h1>Hello From Express</h1>'); //Express does the header setting for you.
}); //Request and Response are pretty self explanatory. Next is another function being passed to the current callback.

const server = http.createServer(app); //The app variable holds a valid event listener.

server.listen(3000);