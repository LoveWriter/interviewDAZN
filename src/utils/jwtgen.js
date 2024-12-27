const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

function generateJWT() {
    return jwt.sign({
        "role": "admin",
        "status": "authorized"
    }, process.env.JWT_SECRET); // eslint-disable-line no-undef
};

module.exports = generateJWT;


