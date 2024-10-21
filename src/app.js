const express = require("express");

const app = express();
const {adminAuth, userAuth} = require('./middlewares/auth')

app.use('/abc',(req,res)=>{
    console.log("running serverr");
    res.send({name:"kishan",age:"28"})   
},(req,res)=>{

    res.send({name:"pardum",age:"28"})   
});


app.use('/admin',adminAuth)
app.get('/admin/getAlldata',(req,res)=>{
    res.send('get data user data succesfuuly')    
})

app.get('/admin/deleteData',(req,res)=>{
    res.send('get data user data succesfuuly')    
})


app.use('/user',userAuth);

app.get('/user/login',(req,res)=>{
    res.send('User Logged In Successfully')    
})

app.get('/user/data',userAuth,(req,res)=>{
    res.send('Access user data successfully')    
})

app.listen((3333),()=>{
    console.log("Connect to server");
});

