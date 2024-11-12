var validator = require('validator');


function signupValidations(req) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.emailId;
    const password = req.body.password;
    
    if(!firstName || !lastName){
        throw new Error("Please Enter your Valid Firstname or Lastname");
    }else if(!validator.isEmail(email)){
        throw new Error("Please Enter your Valid email");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Please Enter your strong password");
    }
};


module.exports={
    signupValidations
}