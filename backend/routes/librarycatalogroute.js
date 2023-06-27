const express = require("express");
const bookModel = require("../models/Book");

let router = express.Router();



router.get("/catalog", function (req, res){
    bookModel.find().then(function(books){
        return res.status(200).json(books);

    }).catch(function(err){
        console.log(err);
        return res.status(500).json({"Message":"Internal server error"})

    })

})

router.get("/catalog/:id", function (req, res){
    console.log(req.params.id)
    bookModel.findOne({"_id": req.params.id}). then (function(book){
        console.log()
        return res.status(200).json(book);
    }).catch(function(err){
        console.log(err);
        return res.status(500).json({"Message": "Internal server error"})
    })

})


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