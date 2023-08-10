var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello World!");
});

app.get('/about', function(req, res){
    res.send("Hello World!");
 });

 app.get('/contact', function(req, res){
    res.send("Hello World!");
 });

 app.get('/signup', function(req, res){
    res.send("Hello World!");
 });

 app.get('/login', function(req, res){
    res.send("Hello World!");
 });

 app.get('/logout', function(req, res){
    res.send("Hello World!");
 });

app.listen(3000);