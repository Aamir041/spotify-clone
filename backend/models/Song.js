const mongoose = require("mongoose");

const songSchema = {

    name : {
        type:String,
        required:true,    
    },

    thumbnail:{
        type:String,
        required:true,
    },
    
    track:{
        type:String,
        required: true,
    },

    /*
        Artist is also a user of spotify where he can upload a song
        therefore storing user id of artist 

        data type of userid is object ID of user given by mongo at the time of creation
    */
    artist:{
        type: mongoose.Types.ObjectId,
        // refers to user 
        ref: "user",
    }

}

const Song = new mongoose.Schema(songSchema);

const SongModel = mongoose.model("Song",Song);

module.exports = SongModel;