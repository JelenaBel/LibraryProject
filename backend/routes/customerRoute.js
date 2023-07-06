const express = require("express");
const bookModel = require("../models/Book");
const orderModel = require("../models/Order");
const userModel= require("../models/User");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

let router = express.Router();


router.post("/order/:id", function (req, res){
    const book_id= req.params.id;

    console.log("Checking if user is in session in making order", req.session.user);
    console.log("Is book ID", book_id);
    
    var order_date  = new Date().toISOString();
    let date_from = order_date.split("T")[0]
    console.log("order-date only date", date_from)
    let year= Number(date_from.split("-")[0])
    let month=Number(date_from.split("-")[1])
    let day = Number(date_from.split("-")[2])
    console.log("Year", year, "Month", month, "day", day+3)
    let pickup_date= ''
    let pick_day=0
    let pick_month=0
    let pick_year=0
    let ret_date=""

    if ((day+3<=31 && (month===1 || month===3 ||  month===5 || month===7 || month===8 || month===10 || month===12))){
        pick_day= Number(day)+3
        console.log("pick_day", pick_day)
             
        pick_month= month-1;
        pick_year=year
        pickup_date= new Date(pick_year, pick_month, pick_day, 5,5,5,5);
        console.log("Pickup date", pickup_date)
        


    } 
    else if ((day+3>31 && (month===1 || month===3 ||  month===5 || month===7 || month===8 || month===10 || month===12))){
        pick_day= Number(day)+3-31;
        pick_month= month;
        pick_year=year;
        pickup_date= new Date(pick_year, pick_month, pick_day, 5,5,5,5);
        console.log("Pickup date", pickup_date)
        
    }
    else{ 
        console.log("Situation out of the written conditions in order dates on server 1")

    }

    pick_month= pick_month+1

    if ((pick_day+28<=31 && (pick_month===1 || pick_month===3 ||  pick_month===5 || pick_month===7 || pick_month===8 ||
        pick_month===10 || pick_month===12))|| 
    (pick_day+28<=30 &&(pick_month===4 || pick_month===6 ||  pick_month===9 || pick_month===11)) || 
    (pick_day+28<=28 && pick_month===2)){
    ret_day= pick_day+28
    ret_month=pick_month;
    ret_year=pick_year
    
    ret_date=new Date(ret_year, ret_month, ret_day,0,0,0,0);
    console.log(" ret date",  ret_date)
    


}  else if ((pick_day+28>31 && (pick_month===1 ||pick_month===3 ||  pick_month===5 ||
    pick_month===7 || pick_month===8 || pick_month===10 || pick_month===12))){
    ret_day= Number(pick_day)+28-31
    console.log("return day", ret_day)
    ret_month= pick_month;
    console.log("return month", ret_month)
    ret_year=year;
    ret_date=new Date(ret_year, ret_month, ret_day,0,0,0,0);
    console.log(" ret date",  ret_date)


}else{ 
    console.log("Situation out of the written conditions in order dates on server 2")

}

    

    let order = new orderModel ({
        "userid": req.session.user,
        "book_id": book_id,
        "order_date": order_date,
        "pickup_date": pickup_date,
        "due_date": ret_date,
        "picked": "",
        "returned": "" 
		        
    })
   
    order.save().then(function(order){
        return res.status(201).json(order)

    }). catch(function(err){
        console.log(err);
        return res.status(500).json({"Message":"Internal server error"})

    })
})

router.get("/getuserinfo", function (req, res){
    const customer_name = req.session.user
    console.log("session user in UserInfo backend", req.session.user)
    userModel.findOne({"username": req.session.user}). then (function(user){
        console.log(user)
        return res.status(200).json(user);

    }). catch(function(err){
        console.log(err);
        return res.status(500).json({"Message":"Internal server error"})

    })

    
})

router.put("/edituser/", function (req, res){
    const username =req.session.user
    if(!req.body) {
		return res.status(400).json({"Message":"Bad Request"})
	}
	if(!req.body.username) {
		return res.status(400).json({"Message":"Bad Request"})
	}
    if(!req.body.password) {
		return res.status(400).json({"Message":"Bad Request"})
	}
    if(req.body.username.length < 4) {
		return res.status(400).json({"Message":"Bad Request"});
	}
	if(req.body.password.length < 8) {
		return res.status(400).json({"Message":"Bad Request"});
	}

    let password=req.body.password
    console.log("Password to change", password, "lenth", password.length)
    

	bcrypt.hash(req.body.password,14,function(err,hash) {
		if(err) {
			console.log(err);
			return res.status(500).json({"Message":"Internal server error"});
		}
    
    let new_password=""
    if(password.length >=60){
        new_password= password
        console.log("New password hashed", new_password, "lenth", new_password.length)
    }
    else {
        new_password = hash
    }
    
	let user = {
		"username":req.body.username,
		"password":new_password,
		"email":req.body.email,
		"librarycard":req.body.librarycard,
        "status":req.body.status
	}
	userModel.replaceOne({"username":username},user).then(function() {
		return res.status(200).json({"Message":"Success"});
	}).catch(function(err) {
        if(err.code === 11000) {
            return res.status(409).json({"Message":"Username is already in use"});
        }
        console.log(err);
        return res.status(500).json({"Message":"Internal server error"});
    });
})
})




router.get("/userorders", function (req, res){
    const customer_name = req.session.user
    
    orderModel.find({"userid": req.session.user}). then (function(orders){
        console.log(orders)
        return res.status(200).json(orders);

    }). catch(function(err){
        console.log(err);
        return res.status(500).json({"Message":"Internal server error"})

    })
})

module.exports = router;