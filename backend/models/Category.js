const mongoose = require("mongoose");

let Schema = mongoose.Schema({
	category_name:{type:String, index:true},
    
})

module.exports = mongoose.model("Category",Schema);