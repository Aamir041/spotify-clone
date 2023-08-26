exports = {};
const jwt = require("jsonwebtoken"); 
exports.getTokens = async(email, user) => {
    // console.log(user._id);
    const token = jwt.sign(
        {identifier:user._id},
        "thisKeyIsSupposedToBeSecret"
    );
    return token;
}

module.exports = exports;
