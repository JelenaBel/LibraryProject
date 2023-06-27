const express = require("express");
const mongoose = require("mongoose");
const libraryCatalogRoute = require("./routes/librarycatalogroute");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const userModel = require("./models/user");
const sessionModel = require("./models/session");


let app = express();

app.use(express.json());


const mongo_url = process.env.MONGODB_URL;
const mongo_user = process.env.MONGODB_USER;
const mongo_password = process.env.MONGODB_PASSWORD;

let port = process.env.PORT || 3001

const url= "mongodb+srv://elenabelousova:OO4QqDlCPrl8RTHk@cluster0.ii50rup.mongodb.net/librarydatabase?retryWrites=true&w=majority"


mongoose.connect(url).then(
	() => console.log("Connected to MongoDB"),
	(error) => console.log("Failed to connect to MongoDB. Reason",error)
)



app.use("/api",  libraryCatalogRoute);

app.listen(3001);
console.log("Running in port",port);