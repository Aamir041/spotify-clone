exports = {};
const jwt = require("jsonwebtoken"); 
exports.getTokens = async(email, user) => {
    const token = jwt.sign({identifier:user._id});
    return token;
}

module.exports = exports;
