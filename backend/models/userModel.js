const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be at least 3 characters long"],
    },
    email:{
        type: String,
        required: [true, "Email is required"],
    }, 
    password:{
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters long"]
    },
    createdOn:{
        type: Date,
        default: new Date().getTime()
    }
});

module.exports = mongoose.model("User", userSchema);