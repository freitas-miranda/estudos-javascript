var express = require("express");
var app = express();

app.use(express.static("public"))

var path = require("path");

app.all("/", function(req, res){
	// res.send('Olá mundo!');
	res.sendFile(__dirname + '/public/page/index.html');
});

app.all('/sobre', function(req, res){
  res.sendfile(__dirname + '/public/page/sobre.html');
});

app.all('/contato', function(req, res){
  res.sendfile(__dirname + '/public/page/contato.html');
});

app.listen(8081, function(){
	console.log("Executando.");
});