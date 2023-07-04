const mongoose = require("mongoose");


let Schema = mongoose.Schema({
	userid:String,
    book_id:String,
    order_date: Date,
    pickup_date: Date,
    due_date: Date,
    picked:Date,
    returned: Date
       
    })

module.exports = mongoose.model("Order",Schema);