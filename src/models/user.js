const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
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
},{
    timestamps:true
});

module.exports = mongoose.model("user",userScheme);