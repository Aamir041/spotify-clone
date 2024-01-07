const express = require("express");
const passport = require('passport');
const router = express.Router();
const Playlist = require("../models/Playlist");
const User = require("../models/User");
const Song = require("../models/Song");


// Route 1 : Create a Playlist
router.post(
    "/create",
    passport.authenticate("jwt",{session:false}),
    async(req,res) => {
        const currentUser = req.user;
        const {name,thumbnail,songs} = req.body;
        
        if(!name || !thumbnail || !songs){
            return res.status(301).json({error:"Insufficient Data"});
        }

        const playlistData = {
            name,
            thumbnail,
            songs,
            owner:currentUser._id,
            collabotaors:[]
        };
        const playlist = await Playlist.create(playlistData);
        return res.status(200).json(playlist);

    }
)


// Route 2 : Get a Playlist by Id
// we will get playlist id as router parameter and we will return playlist having that id

// /playlist/get/:playlistId  here :playListId is variable that meany any thing can be added to url

router.get(
    "/get/playlist/:playlistId",
    passport.authenticate("jwt",{session:false}),
    async(req,res) => {

        // getting parameter form request body
        const playlistId = req.params.playlistId;

        if(playlistId.length !== 24){
            return res.status(301).json({error:"Invalid Playlist Id"});
        }

        // getting playlist which has same _id as playlistId
        // deep popluate example
        const playlist = await Playlist.findOne({_id:playlistId}).populate({
            path:"songs",
            populate:{
                path:"artist"
            }
        });

        if(!playlist){
            return res.status(301).json({error:"Invalid Playlist Id"});
        }
        return res.status(200).json(playlist);

    }
);

// Get all playlist made by an artist

router.get(
    "/get/artist/:artistId",
    passport.authenticate("jwt",{session:false}),
    async(req,res) => {
        const artistId = req.params.artistId;
        
        // Checking id Artist exist or not
        const artist = await User.findOne({_id:artistId});

        if(!artist){
            return res.status(301).json({error:"Invalid Artist ID"});
        }

        const playlists = await Playlist.find({owner:artistId});
        
        return res.status(200).json({data:playlists});
    }
);

// Get all playlist made by an artist

router.get(
    "/get/me",
    passport.authenticate("jwt",{session:false}),
    async(req,res) => {
        const artistId = req.user._id;
        
        // Checking id Artist exist or not
        const artist = await User.findOne({_id:artistId}).populate("owner");

        if(!artist){
            return res.status(301).json({error:"Invalid Artist ID"});
        }

        const playlists = await Playlist.find({owner:artistId});
        
        return res.status(200).json({data:playlists});
    }
);

// Add a song to playlist

router.post(
    "/add/song",
    passport.authenticate("jwt",{session:false}),
    async (req,res) => {
        const currentUser = req.user;

        // Check if current user owns the playlist or is the collaborator in that playlist
        const {playlistId,songId} = req.body;        

        
        // step 1 getting playlist
        const playlist = await Playlist.findOne({_id:playlistId});
        
        if(!playlist){
            return res.status(304).json({error:"Playlist Does Not Exist!"});
        }

        // console.log(playlist.owner);
        // console.log(currentUser._id);

        // console.log((playlist.owner.equals(currentUser._id)));

        //  step 2 checking if currentUser is allowed to add songs in playlist
        if( !(playlist.owner.equals(currentUser._id)) && !playlist.collaborators.includes(currentUser._id) ){
            return res.status(400).json({error:"Not Allowed"})
        }
        
        // step 3 : check if song is valid song

        const song = await Song.findOne({_id:songId});
        if(!song) {
            return res.status(304).json({error:"Song Does Not Exist!"});
        }

        // step 4 : Add the song to playlist
        playlist.songs.push(songId);
        
        // saves updated songs array in database
        await playlist.save();

        return res.status(200).json(playlist);

    }
)


module.exports = router;
