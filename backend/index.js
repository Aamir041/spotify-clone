/* REQUIREMENT SECTION */
const express = require('express'); // express js ki saare functionality is variable me laa raha hu
const mongoose = require("mongoose");
const passport = require('passport'); // passport
const JwtStrategy = require('passport-jwt').Strategy; // passport and passport-jwt 
const ExtractJwt = require('passport-jwt').ExtractJwt; // passport and passport-jwt 
require("dotenv").config(); // stores username and password for mongo db in cloud
const port = 8000; // server will run on this port]
const app = express();
const User = require("./models/User"); // import user form user model
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoute = require("./routes/playlist");
app.use(express.json());

// connecting to mongo db in cloud
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.zypdzdx.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology:true
    }
)
.then(() => {
    console.log("Connected to Mongo!");
})
.catch((err) => {
    console.log(err);
});


// setting passport-jwt
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsSupposedToBeSecret";
passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({_id: jwt_payload.identifier}, function (err, user) {
            // done(error, doesTheUserExist)
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    })
);


// API of GET type : / return text "Hello World" on screen
app.get("/", (req,res) => {
    res.send("HELLO WORLD");
})

// forwarding all the authentication related routes
app.use("/auth",authRoutes);

// forwarding all the song related routes
app.use("/songs",songRoutes);

// forwarding all the playlist realted routes
app.use("/playlist",playlistRoute);

app.listen(port,() => {
    console.log("App is running on this port.");
})
