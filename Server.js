/* First Version
const http = require('http');
const host = 'localhost';
const port = 8082;

const requestListener = function (request, response) {
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("My first NodeJS server!"); 
    response.end();
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
*/

/* Second Version - host with html page */
const http = require('http');
const url = require('url');  
const fs = require('fs');  

const host = 'localhost';
const port = 8082;

const requestListener = function (request, response) {
    var path = url.parse(request.url).pathname;  

    switch (path) {  
        case '/':  
            response.writeHead(200, {  
                'Content-Type': 'text/plain'  
            });  
            response.write("This is my first NodeJS server!");  
            response.end();  
            break;  
        case '/SurveryForm.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                response.writeHead(200, { 'Content-Type': 'text/html' });  
                response.write(data);  
                response.end();  
            });  
            break;  
        default:  
            response.writeHead(404);  
            response.write("opps this doesn't exist - 404");  
            response.end();  
            break;  
    }  
};  

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});