const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
    firstName:{
        type: String,
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
    },
    emailId:{
        type:String,
    }
});

module.exports = mongoose.model("user",userScheme);