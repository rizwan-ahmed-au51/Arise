let express = require("express");
let jwt = require("jsonwebtoken");
let Signup = require("../model/signupModel");
const signupmiddleware = require("../middleware/signupmiddleware");
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
        let payload = {
            user: {
                id: exists._id,
            },
        };
        jwt.sign(payload, "Mehriz6229", { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.send({ token });
        });
    }
});


signupRouting.get("/admindashboard", signupmiddleware, (req, res) => {
    res.send("Welcome");
});
module.exports = signupRouting;
