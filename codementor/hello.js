var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write("Hello World!");
    setTimeout(function () {
        response.write("Hello dog!");
        response.end();
    }, 5000);
}).listen(8080);

console.log("Port 8080 is now running...");
