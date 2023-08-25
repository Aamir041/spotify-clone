const mongoose = require("mongoose");

const playlistSchema = {
    name:{
        type:String,
        required: true,
    },
    thumbnail:{
        type:String,
        required: true,
    },
    /*
        Owner is also a user of spotify where he can add a song
        therefore storing user id of owner 

        datatype of Owner is object ID of user given by mongo at the time of creation
    */
    owner:{
        type:mongoose.Types.ObjectId,
        ref : "user",
    },

    /*
        Songs is an array of objects which constains songs id 
    */
    songs:[
        {
            type: mongoose.Types.ObjectId,
            ref: "song", // refers to song
        },
    ],
    
    /*
        Collaborators is an array of objects which constains users id 
    */
    collaborators:[
        {
            type: mongoose.Types.ObjectId,
            ref: "user", 
        },
    ]

}

const Playlist = new mongoose.Schema(playlistSchema);

const PlaylistModel = mongoose.model("Playlist",Playlist);

module.exports = PlaylistModel;