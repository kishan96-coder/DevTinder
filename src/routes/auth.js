
const express =  require("express");

const authRouter = express.Router();
const User = require("../models/user");
const {signupValidations} = require("../utilis/validations");
const bcrypt = require('bcrypt');

authRouter.post("/signup",async (req,res)=>{
    console.log('test');

    signupValidations(req);

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const emailId = req.body.emailId;
    const password = req.body.password;

    const passwordhash = await bcrypt.hash(password,10);
    const user = new User({
        firstName ,lastName ,emailId ,password:passwordhash
    });
    try{
        
        await user.save();
        res.send("user saved successfully");
    
    }catch(err){
        console.log(err);
        res.status(400).send("there are some errors"+err);
    }
});


authRouter.post("/login",async (req,res)=>{
    try{
        const {password,emailId} = req.body;
        const user = await User.findOne({emailId: emailId});
        if(!user){
            throw new Error("Invalid Creditentials");   
        }

        var token = await user.getJwt();
   
        res.cookie('token', token);
       
        const isValidPassword =  await user.validatePassword(password);
     
        if(isValidPassword){
            res.send("Login Successfully");
        }

    }catch(err)
    {
        res.status(400).send("Invalid passowrd or email"+err);
    }

});


module.exports = authRouter;
