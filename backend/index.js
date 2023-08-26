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
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsSupposedToBeSecret";
passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne(
            { id: jwt_payload.sub }, 
            function (err, user) {
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

app.use("/auth",authRoutes);

app.listen(port,() => {
    console.log("App is running on this port.");
})
