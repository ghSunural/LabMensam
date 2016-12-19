'use strict';
var http = require('http');
var url = require('url');
var Router = require('./router');
//var express = require('express');

var ur = url.parse('https://urfu-2016.github.io/javascript-slides/09-nodejs/#/37');
console.log('');

//request, response

var server = new http.Server();
var port = '8000';
server.on('request', function (req, res) {
    res.writeHead(200);
    console.log(req.method);
    console.log(req.headers);
  //  console.log(req.url);
    res.end('info');
});

server.listen(port);

var temp = encodeURIComponent('How to');
console.log(temp);

//в браузере http://localhost:8080/
//http://127.0.0.1:8080/

//chunk кусок ломоть