const http = require('http');
const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.statusCode = 200;
        response.setHeader('content-type', 'text/html');
        response.write('<html>');
        response.write('<head><title>Workflow Module</title></head>');
        response.write('<body><h1>Workflow Development Example Server</h1>');
        response.write('<h2>Test HTML element for Nodemon server package.</h2>');
        response.write('<p>Lorem Ipsum</p><br>');
        response.write('</body>');
        response.write('</html>');
        return response.end();
    }
    else {
        response.statusCode = 404;
        response.setHeader('content-type', 'text/html');
        response.write('<html>');
        response.write('<head><title>Workflow Module</title></head>');
        response.write('<body><h1>The Page You Are Looking For Doesn\'t exist</h1>');
        response.write('</body>');
        response.write('</html>');
        return response.end();
    }
});
server.listen('3000');