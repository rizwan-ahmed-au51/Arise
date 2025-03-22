let jwt = require("jsonwebtoken");

let signupmiddleware = (req, res, next) => {
    let token = req.header("x-token");
    if (!token) {
        return res.status(401).send("No Token Found");
    }
    try {
        let decode = jwt.verify(token, "Mehriz6229");
        req.user = decode.user;
        next();
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
};
module.exports = signupmiddleware;