const express = require('express');
const router = express.Router();

const User = require("../models/user.js");

const {userAuth} = require("../middlewares/auth.js");


const profile = router.get("/user",userAuth,async (req,res)=>{

    const {token}= req.cookies;

    var decoded = jwt.verify(token,"Kishan@96#");
    const {emailId}= decoded;
  
    try{
       const UserFIND  = await User.findOne({emailId:emailId});
     
        res.send(UserFIND);
    }catch(err){
        res.status(400).send("there are some errors");
    }
});


module.exports={
    profile
}

