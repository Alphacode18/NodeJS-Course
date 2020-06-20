const http = require('http');
const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.statusCode = 200;
        response.setHeader('content-type', 'text/html');
        response.write('<html>');
        response.write('<head><title>Workflow Module</title></head>');
        response.write('<body><h1>Workflow Development Example Server</h1></body>');
        response.write('</html>');
        return response.end();
    }
});
server.listen('3000');