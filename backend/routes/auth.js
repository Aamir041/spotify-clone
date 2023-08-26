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
        return res.status(403).json({error:"A user with this already exists"});
    }
    
    // If a user does not exist.
    // Step 3 then create a new user in the db.
    // Step 3.1 : we do not store password in plain text.
    // we convert plaintext password it hash of 256 length and store that hashed password.
    const hashedPassword = bcrypt.hash(password,10);

    // Step 3.2 : Store user in db new hash password.
    const newUserData = {
        email, 
        password : hashedPassword, 
        firstName,
        lastName,
        username
    };

    const newUser = await User.create(newUserData);

    //Step 4  : create a token to return to the user
    const token = getTokens(email,newUser);
    
    // Step 5 return token to user
    const userToReturn = {...newUser.toJSON(),token};
    delete userToReturn.password;
    return res.status(200,userToReturn);

})
