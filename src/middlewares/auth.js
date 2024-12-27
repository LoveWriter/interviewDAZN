const jwt = require('jsonwebtoken');
const generateJWT = require('../utils/jwtgen');

function isAuthorised(req, res, next) {
    try {
        const token = req.query.signer;
        if (!token) {
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }
        const verified = jwt.verify(generateJWT(), token);
        if (!verified) {
            return res.status(403).json({
                message: 'Forbidden'
            });
        }
        if (verified.role !== "admin" || verified.status !== "authorized") {
            return res.status(403).json({
                message: 'Forbidden'
            });
        }
        req.user = {
            role: verified.role,
            status: verified.status
        };
        next();
    } catch (error) {
        req.log.error(error);
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                message: 'Unauthorized'
            });
        } else {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
}
module.exports = isAuthorised;