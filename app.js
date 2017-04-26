const express = require("express");
const mongoose = require('mongoose');

const dbUrl = 'mongodb://prerenderj:7nBsIWA93OoaedLLg1df0yy1YRnEyPV6MtqTFPf3AHqIR0QMdZVPQ2zAkMsqMKTI0Xk3nvK3Au78D8Xo4jVQCA==@prerenderj.documents.azure.com:10250/?ssl=true';
const dbOptions = {};
mongoose.connect(dbUrl, dbOptions).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
    err => {
        return console.log(err);
    }
);

const app = express();

app.get("/", (req,res) => {
    res.send("Welcome to cach Restful APIs");
});

app.listen(4000,() =>{
    console.log('Server is listening to 4000');
});