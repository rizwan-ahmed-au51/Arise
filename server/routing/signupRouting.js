let express = require("express");
let Signup = require("../model/signupModel")
let signupRouting = express.Router();


signupRouting.post("/signup", async (req, res) => {
    let signup = new Signup(req.body);
    let result = await signup.save();
    res.send(result);
});

signupRouting.post("/login", async (req, res) => {
    const { email, password } = req.body;
    let exists = await Signup.findOne({ email: email });
    if (!exists) {
        res.send("No user Found");
    }
    else if (exists.password != password) {
        res.send("Invalid");
    } else {
        res.send("Valid");
    }
});

module.exports = signupRouting;
