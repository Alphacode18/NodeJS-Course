/*
 * The extra logs you would see are generally because of the favicon requests by the browser.
 */

//const http = require('http'); No HTTP Import required.

const express = require('express'); //Import Express.js
const bodyParser = require('body-parser');

const app = express(); //Execute the function imported. This function does all the background set up for us regarding the object.

/* 

app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); //Important to push the user to next middleware.
}); //Request and Response are pretty self explanatory. Next is another function being passed to the current callback.

*/

//app.use() is very versatile. It can be used as a lot of different definitions.

//Parse Middleware

app.use('/', (req, res, next)=> {
    next();
});

app.use(bodyParser.urlencoded({extended:true})); //Parses body from forms and inside calls next to move onto the other middle ware.

//In app.use(), the first argument is a a path. But it means that the path has to start with that, and not end. Thus, use top to bottom middleware.
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>'); 
    //Express does the header setting for you.
});

app.use('/product', (req, res, next) => {
    console.log(req.body); //undefined because even though Express gives us the body, it does not parse it for us.
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello From Express</h1>'); //Express does the header setting for you.
}); //Request and Response are pretty self explanatory. Next is another function being passed to the current callback.

app.listen(3000);//The app.listen() automates the two below lines for you.

//const server = http.createServer(app); //The app variable holds a valid event listener.
//server.listen(3000);