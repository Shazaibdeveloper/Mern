var express = require('express');
var app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Connection URL with placeholders for username, password, and database name
const dbUsername = 'shahzaibmuhammad';
const dbPassword = 'Blockchain2.0'; // Replace with your actual password
const dbName = 'mernstack'; // Replace with your actual database name

const db = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.nwcwrtp.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(db, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
 }).then(() => {
    console.log("Connected to the database.");
}).catch((err) => {
    console.log("Connection error:", err);
});

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

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
