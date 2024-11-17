
const jwt = require('jsonwebtoken');

const adminAuth = (req,res,next)=>{
const AutherizeToken= "authorize123";

const Authorize = AutherizeToken==="authorize123";

    if(Authorize ){
        console.log("Authorized admin");
        next();
    }else{
        res.status(402).send('You are not authorized!')
    }  
}

const userAuth = async (req,res,next)=>{


    const {token}= req.cookies;

    var decoded = jwt.verify(token,"Kishan@96#");

    const {emailId}= decoded;
    
    try{
       const UserFIND  = await User.findOne({emailId:emailId});

       if(!token){
        req.user =  UserFIND ;
        res.send("Authorized User");

        next();  
    }else{
        res.status(402).send('You are not authorized!')
    }  
     
    }catch(err){
        res.status(400).send("there are some errors"+err);
    }
}
    
    
module.exports = {
    adminAuth,
    userAuth
}