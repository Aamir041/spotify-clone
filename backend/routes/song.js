const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Song");
const User = require("../models/User");

// Create a Song by current logged in user 
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
        console.log(req.user.firstName);
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

// Get route for all songs that an artist has published
// I will send artist id and I want see all the songs that artis has published
router.get(
    "/get/artist/:artistId",
    passport.authenticate("jwt",{session:false}),
    async (req,res) => {

        // extract artist id from req body
        const {artistId} = req.params;

        // Check if  such artist exists or not
        // Instead of find use findOne cause find returns empty array where as findOne returns null/undefined if artist not found
        const artist = await User.findOne({_id:artistId});

        if(!artist) return res.status(301).json({error:"User does not exist."});

        const songs = await Song.find({artist:artistId});
        return res.status(200).json({data:songs});
    }
)

// Get Song by name
router.get(
    "/get/songname/:songName",
    passport.authenticate("jwt",{session:false}),
    
    async (req,res) => {
        // extract song name from request body
        const {songName} = req.params;

        const songs = await Song.find({name:songName});
        return res.status(200).json({data:songs});
    }
)

module.exports = router;

