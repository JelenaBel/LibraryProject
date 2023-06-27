const mongoose = require("mongoose");


let Schema = mongoose.Schema({
	username:{type:String,unique:true},
	password:String,
    status: String
    })

module.exports = mongoose.model("User",Schema);