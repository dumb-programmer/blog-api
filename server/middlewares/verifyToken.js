const { verify } = require("jsonwebtoken")

const verifyToken = async (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1] || null;
    if (token) {
        const user = await verify(token, process.env.SECRET);
        req.user = user;
    }
    next();
};

module.exports = verifyToken;