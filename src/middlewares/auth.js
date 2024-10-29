
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



const userAuth = (req,res,next)=>{
    const AutherizeToken= "authorize123";
    
    const Authorize = AutherizeToken==="authorize123";
    
        if(Authorize ){
            console.log("Authorized User");
            next();  
        }else{
            res.status(402).send('You are not authorized!')
        }  
    }
    
    
module.exports = {
    adminAuth,
    userAuth
}