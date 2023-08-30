const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Song");
// const User = require("../models/User");
router.post(
    "/create",
    passport.authenticate("jwt", {session:false}), // this a middleware
    // req.user gets the user because of passport.authenticate
    async (req, res) => {
        const { name, thumbnail, track } = req.body;
        if(!name || !thumbnail || ! track){
            return res
            .status(300)
            .json({error:"Insufficient details to create song."});
        }
        const artist = req.user._id;
        const songDetails = {name, thumbnail, track, artist};
        const createdSong = await Song.create(songDetails);
        return res.status(200).json(createdSong);
    }
); 

// Get route to get all the songs I have published
router.get(
    "/get/mysongs",
    passport.authenticate("jwt", {session:false}),
    async (req,res) => {
        const currentUser = req.user;

        // Getting all the songs where artist id = current id 
        const songs = await Song.find({artist:req.user._id});
        
        return res.status(200).json({data:songs});
    }
)

module.exports = router;

