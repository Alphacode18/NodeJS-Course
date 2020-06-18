const http = require('http'); //Require used to import modules. It takes in a path or a core module as a arguement. Adds a .js at the end.
const server = http.createServer((request, response) => {
    console.log(request);
});
server.listen(3000);