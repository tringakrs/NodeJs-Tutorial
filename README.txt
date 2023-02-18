A common task for a web server can be to open a file on the server and return the content to the client.

Here is how PHP or ASP handles a file request:

Sends the task to the computer's file system.
Waits while the file system opens and reads the file.
Returns the content to the client.
Ready to handle the next request.

Here is how Node.js handles a file request:

Sends the task to the computer's file system.
Ready to handle the next request.
When the file system has opened and read the file, the server returns the content to the client.

Node.js eliminates the waiting, and simply continues with the next request.
Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

What Can Node.js Do?
Node.js can generate dynamic page content
Node.js can create, open, read, write, delete, and close files on the server
Node.js can collect form data
Node.js can add, delete, modify data in your database

What is a Node.js File?
Node.js files contain tasks that will be executed on certain events
A typical event is someone trying to access a port on the server
Node.js files must be initiated on the server before having any effect
Node.js files have extension ".js"

What is a Module in Node.js?
A set of functions you want to include in your application.(same as JavaScript libraries.)

Include Modules
To include a module, use the require() function with the name of the module:
var http = require('http');

Now your application has access to the HTTP module, and is able to create a server:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

Create Your Own Modules
You can create your own modules, and easily include them in your applications.

The following example creates a module that returns a date and time object:
exports.myDateTime = function () {
  return Date();
};
Use the exports keyword to make properties and methods available outside the module file.

Include Your Own Module
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);

Node.js as a Web Server
The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
Use the createServer() method to create an HTTP server:
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

Add an HTTP Header
If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);

The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.

Read the Query String
The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).

This object has a property called "url" which holds the part of the url that comes after the domain name:

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);

What you put after / will be the result

Split the Query String
There are built-in modules to easily split the query string into readable parts, such as the URL module.

Node.js as a File Server
The Node.js file system module allows you to work with the file system on your computer.

To include the File System module, use the require() method:
var fs = require('fs');

Read Files
The fs.readFile() method is used to read files on your computer.

Assume we have the following HTML file (located in the same folder as Node.js):
<html>
<body>
<h1>My Header</h1>
<p>My paragraph.</p>
</body>
</html>

Create Files
The File System module has methods for creating new files:

fs.appendFile()
fs.open()
fs.writeFile()

The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:

var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

Example
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

Update Files
The File System module has methods for updating files:

fs.appendFile()
fs.writeFile()

The fs.appendFile() method appends the specified content at the end of the specified file:

var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

The fs.writeFile() method replaces the specified file and content:

var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

Delete Files
To delete a file with the File System module,  use the fs.unlink() method.

The fs.unlink() method deletes the specified file:

var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

Rename Files
To rename a file with the File System module,  use the fs.rename() method.

The fs.rename() method renames the specified file:

var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

Upload Files
You can also use Node.js to upload files to your computer.
