var http = require('http');
//var dt = require('./module');
var url = require('url');

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("Tha date and time are currently: "+dt.myDateTime());
//     //res.end('Hello World!');//write the response
//     res.end();//end the response
// }).listen(8080);//the server object listens on port 8080

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();
// }).listen(8080);

//Split the query string into readable parts:
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true), query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);