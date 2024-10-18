const express = require("express");

const app = express();

app.get('/test',(req,res)=>{
    res.send({name:"kishan",age:"28"})
});

app.post('/hello',(req,res)=>{
    res.send('Hello my second bro')
});

app.patch('/test',(req,res)=>{
    res.send({name:"kk",Age:"28"})
});

app.delete('/',(req,res)=>{
    res.send('Data deleted Successfully')
});
app.listen((3333),()=>{
    console.log("Connect to server");
});

