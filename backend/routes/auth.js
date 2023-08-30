// Requirement
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt"); //Package required for hashing password.
const {getTokens} = require("../utils/helpers");

// this POST route will help to regiter a user
router.post("/register", async (req,res) => {
    //This code will run when /register is called as POST /request

    //Step 1 from frontend req.body will contain these things {email, password, firstName, lastName, username}
    const {email,password,firstName,lastName,username} = req.body;

    //Step 2 check if email already exists ? If yes then we throw an error
    const user = await User.findOne({email:email}); // findOne is a function in mongo used to search in collection

    if(user){ 
        // res.status is bydefault 200 therefore to return error we set res.status(403)
        return res.status(403).json({error:"A user with this email already exists."});
    }
    
    // If a user does not exist.
    // Step 3 then create a new user in the db.
    // Step 3.1 : we do not store password in plain text.
    // we convert plaintext password it hash of 256 length and store that hashed password.
    // 10 here for salt 
    const hashedPassword = await bcrypt.hash(password,10);

    // Step 3.2 : Store user in db new hash password.
    const newUserData = {
        email, 
        password : hashedPassword, 
        firstName,
        lastName,
        username
    };
    // console.log(newUserData);

    const newUser = await User.create(newUserData);

    //Step 4  : create a token to return to the user and store it
    const token = await getTokens(email,newUser);
    
    // Step 5 return token to user
    const userToReturn = {...newUser.toJSON(),token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);


})

router.post("/login", async (req,res) => {
    // Step 1 take user details such as email and password seny by user from req body
    const {email,password} = req.body;

    // Step 2 Check if a user with given email exsists. If not, the credentails are
    const user = await User.findOne({email:email});
    if(!user){
        return res.status(403).json({error:"Invalid Credentials"});
    }

    // Step 3 if the user exsis check if the password is correct
    // This is a tricky step cause stored password is hashed and it is difficult to decrypt hashed password
    // so what we do is we hash the password given by user at the time of login and compare it with stored hash if same then good

    const isPasswordValid = await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.status(403).json({error:"Invalid Credentials"});
    }

    // Step 4 if the creendiatls are correct return a token to user
    const token = await getTokens(user.email,user);
    const userToReturn = {...user.toJSON(),token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
})

module.exports = router;