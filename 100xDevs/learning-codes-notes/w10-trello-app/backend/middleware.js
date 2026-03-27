const jwt = require("jsonwebtoken")
require("dotenv").config();
function authMiddleWareVerify(req, res, next) {
    const token = req.headers.token;

    if (!token || token == "null") {
        return res.status(400).json({
            message: "No token found!! please login"
        })
    };

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userid = decoded.id;
    if (userid) {
        req.userid;
        next()
    } else {
        res.status(403).json({
            message: "incorrect token"
        })
    }
}

module.exports = {
    authMiddleWareVerify: authMiddleWareVerify
}