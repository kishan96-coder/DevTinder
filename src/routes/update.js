const express = require('express');
const router = express.Router();

const updatedUser = router.patch("/updateuser",async (req,res)=>{

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


module.exports={
    updatedUser
}

