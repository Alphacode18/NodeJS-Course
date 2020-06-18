const http = require('http'); //Require used to import modules. It takes in a path or a core module as a arguement. Adds a .js at the end.
const server = http.createServer((request, response) => {
    console.log(request.url, request.method, request.headers);
    //process.exit();
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>My First Page</title></head>');
    response.write('<body><h1>Hello, World</h1></body>');
    response.write('</html>');
    response.end();
});
server.listen(3000);