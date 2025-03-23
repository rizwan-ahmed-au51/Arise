let jwt = require("jsonwebtoken");

let signupmiddleware = (req, res, next) => {
    let token = req.header("x-token");
    if (!token) {
        res.send("No Token Found");
    }
    let decode = jwt.verify(token, "Mehriz6229");
    req.user = decode.user;
    next();
};
module.exports = signupmiddleware;

