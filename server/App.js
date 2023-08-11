var express = require('express');
var app = express();
require('./db/Conn')
const dotenv = require('dotenv');


dotenv.config({path:'./config.env'})
 const PORT = process.env.PORT;

const middleware = (req, res, next) => {
    console.log("Middleware executed.");
    next();
}

app.get('/', function (req, res) {
    res.send("Hello World!");
});

app.get('/about', middleware, function (req, res) {
    res.send("About World!");
});

app.get('/contact', function (req, res) {
    res.send("Contact World!");
});

app.get('/signup', function (req, res) {
    res.send("Signup World!");
});

app.get('/login', function (req, res) {
    res.send("Login World!");
});

app.get('/logout', function (req, res) {
    res.send("Logout World!");
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
