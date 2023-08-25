const express = require('express'); // express js ki saare functionality is variable me laa raha hu

const mongoose = require("mongoose");

require("dotenv").config(); // stores username and password for mongo db in cloud

const port = 8000; // server will run on this port

const app = express();
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

// API of GET type : / return text "Hello World" on screen
app.get("/", (req,res) => {
    res.send("HELLO WORLD");
})

app.listen(port,() => {
    console.log("App is running on this port.");
})
