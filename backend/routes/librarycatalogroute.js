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





module.exports = router;