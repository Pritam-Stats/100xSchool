const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
    const token = req.headers.token;
    if (!token || token === "null") {
        return res.status(401).json({
            message: "Unauthorized: You are not logged in"
        });
    }


    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const userid = decoded.userId   //because while jwt sign we used userId

        if (!userid) {
            return res.status(401).json({
                message: "Invalid token"
            });
        }

        req.userId = userid
        next();
    } catch (err) {
        return res.status(401).json({
            message: "invalid or expired token"
        })
    }
 

}

module.exports = {
    authMiddleware : authMiddleware
}
