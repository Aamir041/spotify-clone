// HOW TO CREATE A MODEL
// STEP 1  : REQUIRE MONGOOSE
// STEP 2 : CREATE A USER SCHEMA IN MONGOOSE
// STEP 3 : CREATE A MODEL

const mongoose = require("mongoose");

// to create schema use Schema function from mongoose
// it takes object as parameter

// by default required is false in mongoose
const userSchema = {
    firstName:{
        type : String,
        required: true
    },
    password: {
        type: String,
        required: true,
        private: true,
    },
    lastName : {
        type: String,
        required: false // by default it is false
    },
    email:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required: true
    },
    likedSongs:{
        // this type will change later
        type: String,
        default: "" // if value of likedSong is null then default value is empty string
    },
    likedPlaylist:{
        // this type will change later
        type: String,
        default: "" // if value of likedPlaylist is null then default value is empty string
    },
    subscribedArtists:{
        // this type will change later
        type: String,
        default: "" // if value of subscribedArtist is null then default value is empty string
    }
}

// provides a blueprint for how the data should be structured within a MongoDB collection.
const User = new mongoose.Schema(userSchema);

// converts user schema in a way which mongodb can understand
const UserModel = mongoose.model("User",User);

module.exports = UserModel;