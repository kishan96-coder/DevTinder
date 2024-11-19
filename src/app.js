const express = require("express");
const { connectDB } = require("./config/database");
const cookieParser = require('cookie-parser');

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");

app.use('/',authRouter);

require("./config/database")

connectDB().then(()=>{
    console.log("Database connected successfully");
    app.listen((3333),()=>{
        console.log("Connect to server");
    });
    
    
}).catch(err=>{
    console.log(err);
})

