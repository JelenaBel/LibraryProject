const mongoose = require("mongoose");

let Schema = mongoose.Schema({
	title:{type:String, index:true},
    author: String,
    published: Number,
    number_pages: Number,
    language: String,
    short_desc: String, 
	full_description:String,
    category: String,
	library_code: {type:String, unique: true},
   
})

module.exports = mongoose.model("Book",Schema);