const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/userManagement")

const userSchema =mongoose.Schema({
    userName:String,
    Profession:String,
    email:String,
    Image:String
})

module.exports = mongoose.model("user", userSchema);