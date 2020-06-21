const http = require('http');

const express = require('express'); //Import Express.js

const app = express(); //Execute the function imported. This function does all the background set up for us regarding the object.

const server = http.createServer(app); //The app variable holds a valid event listener.

server.listen(3000);