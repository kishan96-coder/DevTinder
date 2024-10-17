const express = require("express");

const app = express();



app.use('/test',(req,res)=>{
    res.send('Hello testing testing')
});

app.use('/hello/2',(req,res)=>{
    res.send('Hello my second bro')
});

app.use('/hello',(req,res)=>{
    res.send('Hello to express js')
});

app.use('/',(req,res)=>{
    res.send('Hello server')
});
app.listen((3333),()=>{
    console.log("Connect to server");
});

