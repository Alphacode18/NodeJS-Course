const requestHandler = (request, response) => {
    const url = request.url;
    const method = request.method;
    if (url === '/') {
        greet(response);
    };
    if (url === '/users') {
        displayUsers(response);
    };
    if (url === '/create-user' && method === 'POST') {
    };
};

const greet = response => {
    response.statusCode = 200;
    response.setHeader('content-type', 'text/html');
    response.write('<html>');
    response.write('<head><title>Pawdopt</title></head>');
    response.write('<body><h1>Welcome To Pawdopt</h1>');
    response.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>')
    response.write('</body>')
    response.write('</html>');
    return response.end();
};

const displayUsers = response => {
    response.statusCode = 200;
    response.setHeader('content-type', 'text/html');
    response.write('<html>');
    response.write('<head><title>Pawdopt</title></head>');
    response.write('<body>');
    response.write('<h1>Current Users</h1>');
    response.write('<ul>');
    response.write('<li>Shreyas Kharbanda</li>');
    response.write('<li>Shambhavi Kharbanda</li>');
    response.write('<li>Deepti Kharbanda</li>');
    response.write('<li>Sunil Kharbanda</li>');
    response.write('<li>Woody Kharbanda</li>');
    response.write('</ul>');
    response.write('</body>')
    response.write('</html>');
    return response.end();
};

module.exports = requestHandler;