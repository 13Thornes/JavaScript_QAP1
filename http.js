// Project: explore http code, create http srver
// Author: Samantha Thorne
// Date: 18/05/2024

// require http
var http = require('http');

// create server
const server = http.createServer(function (req, res) {
    
    // make server an html document
    res.writeHead(200, {'Content-Type':'text/html'})

    // write to server
    res.write('This is my server')

    // end response
    res.end();
})

// Listen for server and console log
server.listen(8000, () => {
    console.log('Server running on port 8000')
});


