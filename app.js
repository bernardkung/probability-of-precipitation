const express       = require('express');
const mongoose      = require('mongoose');
// const bodyParser    = require("body-parser");

const app           = express();

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs")
})

// Start App
app.listen(process.env.PORT, process.env.IP, () => {
    console.log("The server has started!");
})

