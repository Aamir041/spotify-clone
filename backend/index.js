// TEMP CODE

const express = require('express'); // express js ki saare functionality is variable me laa raha hu

const port = 8000; // server will run on this port

const app = express();

// API of GET type : / return text "Hello World" on screen
app.get("/", (req,res) => {
    res.send("HELLO WORLD");
})

app.listen(port,() => {
    console.log("App is running on this port.");
})
