const express = require("express");
const { connectDB } = require("./config/database");

const app = express();

require("./config/database")

connectDB().then(()=>{
    console.log("Database connected successfully");
    app.listen((3333),()=>{
        console.log("Connect to server");
    });
    
    
}).catch(err=>{
    console.log(err);
})

