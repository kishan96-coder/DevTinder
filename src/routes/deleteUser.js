const express = require('express');
const router = express.Router();
const {userAuth} = require("../middlewares/auth");

const deleteUser = router.delete("/deleteuser",userAuth,async (req,res)=>{

    const userId =  req.body._id;
    const data = req.body;

    try{
        const userDeleted = await User.findOneAndDelete({_id:userId},data);
        res.send(userDeleted);
    }catch(err){
        res.status(400).send("there are some errors");
    }
});


module.exports={
    deleteUser
}