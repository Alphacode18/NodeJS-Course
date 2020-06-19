const http = require('http'); //Require used to import modules. It takes in a path or a core module as a arguement. Adds a .js at the end.
const routes = require('./routes');
const server = http.createServer(routes);
server.listen(3000);