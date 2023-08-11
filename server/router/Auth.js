const express = require('express');
const router = express.Router();

 

router.get('/', function (req, res) {
    res.send("Hello Worldsss !");
});

router.get('/register', function (req, res) {
    res.send("Hello register !");
});
 
router.post('/register', function (req, res) {
    console.log(req.body);
    res.json({message: req.body});
});

module.exports = router;