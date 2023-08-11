const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser'); // Require the body-parser module
router.use(bodyParser.json()); // Use the JSON parser

require("../db/Conn")
 const User = require("../models/UserSchema")

router.get('/', function (req, res) {
    res.send("Hello Worldsss !");
});

router.get('/register', function (req, res) {
    res.send("Hello register !");
});
 
router.post('/register', async function (req, res) {
    try {
        const { name, work, email, password, cpassword, phone } = req.body;

        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return res.status(422).json({ error: "email exists" });
        }

        const user = new User({ name, email, work, phone, password, cpassword });
        await user.save();
        return res.status(201).json({ message: "user registered successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "database error", message: err.message });
    }
});

module.exports = router;