const express = require("express");
const { connectDB } = require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.post("/create-user",async (req,res)=>{
    
    const data = req.body;
    
    const user = new User(req.body);
    
    try{
        
        await user.save();
        res.send("user saved successfully");
    
    }catch(err){
        res.status(400).send("there are some errors"+err);
    }
});

app.get("/feed",async (req,res)=>{
    try{
        const users = await User.find({});
        res.send(users);
    }
    catch(err){
        res.status(400).send("Unexpected errors occurs");
    }

});

app.get("/user",async (req,res)=>{

    const email = req.body.emailId;
    const fid = req.body._id;

    try{
       const UserFIND  = await User.findById({_id: fid});
        res.send(UserFIND);
    }catch(err){
        res.status(400).send("there are some errors");
    }
});

app.get("/user-id",async (req,res)=>{

    const user = new User(req.body);
    try{
        await user.save();
        res.send("user saved successfully");
    }catch(err){
        res.status(400).send("there are some errors");
    }
});

app.delete("/deleteuser",async (req,res)=>{

    const userId =  req.body._id;
    const data = req.body;

    try{
        const userDeleted = await User.findOneAndDelete({_id:userId},data);
        res.send(userDeleted);
    }catch(err){
        res.status(400).send("there are some errors");
    }
});

app.patch("/updateuser",async (req,res)=>{


  
    try{
 
        const userId=  req.body.userId;
        const data = req.body;
    
        const AllowedVALUES = ["firstName","lastName"," phoneNumber","skills"];

        const updatedValue = Object.keys(data).every((k) =>
            AllowedVALUES.includes(k)

        ); 
        
        if(!updatedValue){

          throw new Error("Update Not allowed");
        }
        const userUpdated = await User.findByIdAndUpdate({_id: userId},data,{ 
            returnDocument: "after",
            runValidators:true
        });
        res.send("User updated successfully");

    }catch(err){
        res.status(400).send("there are some errors"+err.message);
    }
});

require("./config/database")

connectDB().then(()=>{
    console.log("Database connected successfully");
    app.listen((3333),()=>{
        console.log("Connect to server");
    });
    
    
}).catch(err=>{
    console.log(err);
})

