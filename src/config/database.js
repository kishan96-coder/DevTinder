const mongoose = require("mongoose");


const connectDB = async () => {
    await mongoose.connect("mongodb+srv://kishansingh150127:uYC35Wpaudpe2A5n@kishancluster.lm345.mongodb.net/devTinder"

    );
}

module.exports={
    connectDB
}
