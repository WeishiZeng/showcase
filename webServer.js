var http = require("http");
var fs = require('fs');
url = require('url');
var port = 8080;  //http port
var serverUrl = "127.0.0.1";
var counter = 0; 

var server = http.createServer(function(req, res) {

  counter++;   
  console.log("Request: " + req.url + " (" + counter + ")"); //most browser gonna request for /favicon.ico
  
  if(req.url == "/index.html") {

    fs.readFile("index.html", function(err, text){
      res.setHeader("Content-Type", "text/html");
      res.end(text);
    });

    return;

  } 

  if (req.url == "/rule_the_world_please.png") {
  	var action = req.pathname;
  	console.log("!!!!!!!!!!!" + action + ":" );

     var img = fs.readFileSync('./rule_the_world_please.png');
     res.writeHead(200, {'Content-Type': 'image/gif' });
     res.end(img, 'binary');

     return;
  
  }

  res.setHeader("Content-Type", "text/html");
  res.end("<p>Yo Anna! You are at " + req.url + ". Request counter: " + counter + "</p>");

});

server.listen(port, serverUrl);
console.log("Server running at " + serverUrl + ":" + port);