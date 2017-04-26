const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const dbUrl = process.env.MONGODB_URL ||
    'mongodb://localhost/prerendercache';

const dbOptions = {};
mongoose.connect(dbUrl, dbOptions).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
    err => {
        return console.log(err);
    }
);

const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.send("Welcome to cach Restful APIs");
});

// app.listen(4000,() =>{
//     console.log('Server is listening to 4000');
// });

module.exports = app;