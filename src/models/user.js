const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userScheme = new mongoose.Schema(
    
    {

    userId:{
        type:String,
    },
    firstName:{
        type: String,
        uppercase: true,
        required : true,
        minLength:5,
        maxLength:25
    },
    lastName:{
        type:String,
    },
    phoneNumber:{
        type:Number,
    },
    age:{
        type:Number
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Gender data is not valid");
            }
        },
    },
    emailId:{
        type:String,
        required : true,
        lowercase: true,
        unique:true,
        trim:true
        
    },
    password:{
        type:String,
        required : true
    },
    photoUrl:{
        type:String,
        default:'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg?w=740'

    },
    about:{
        type:String,
        default:'Its about me',
        
    },
    skills:{
        type:[String],
        
    },
},
{
    timestamps:true
});

userScheme.methods.getJwt = async function(){
    const user = this;
    const token = jwt.sign({emailId:user.emailId},"Kishan@96#",{
        expiresIn:"7d",
    });
    return token;
}
userScheme.methods.validatePassword = async function(passowrdInputByUser ){
    const user = this;
    const passwordhash = user.password;
    console.log( user);
    const isValidPassword = await bcrypt.compare(passowrdInputByUser,passwordhash );

    return isValidPassword ;

}


module.exports = mongoose.model("user",userScheme);