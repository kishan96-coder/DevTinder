const express = require("express");

const app = express();

app.use('/test',(req,res)=>{
    res.send('Hello testing testing')
});

app.use('/hello',(req,res)=>{
    res.send('Hello to express js')
});

app.listen((3333));

