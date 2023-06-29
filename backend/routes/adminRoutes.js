const express = require("express");
const bookModel = require("../models/Book");

let router = express.Router();


router.post("/books/add", function (req, res){
    if (!req.body){
        return res.status(400).json({"Message":"Bad request"})
    }
    
    let book = new bookModel ({
		"title":req.body.title,
        "author": req.body.author,
        "published": req.body.published,
        "number_pages": req.body.number_pages,
        "language": req.body.language,
        "short_desc": req.body.short_desc,
	    "full_description":req.body.full_description,
        "category": req.body.category,
	    "library_code": req.body.library_code
        
        
    })
   
    book.save().then(function(book){
        return res.status(201).json(book)

    }). catch(function(err){
        console.log(err);
        return res.status(500).json({"Message":"Internal server error"})

    })
})

module.exports = router;