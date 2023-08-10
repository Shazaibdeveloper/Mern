var express = require('express');
var app = express();

// connection 

/* mongodb+srv://shahzaibmuhammad:<password>@cluster0.nwcwrtp.mongodb.net/?retryWrites=true&w=majority */




const middleware = (req,res,next) =>{
    res.send("Done")
    next();
}

 

app.get('/', function(req, res){
   res.send("Hello World!");
});

app.get('/about',middleware, function(req, res){
    res.send("about World!");
 });

 app.get('/contact', function(req, res){
    res.send("contact World!");
 });

 app.get('/signup', function(req, res){
    res.send("signup World!");
 });

 app.get('/login', function(req, res){
    res.send("login World!");
 });

 app.get('/logout', function(req, res){
    res.send("logout World!");
 });

app.listen(3000);