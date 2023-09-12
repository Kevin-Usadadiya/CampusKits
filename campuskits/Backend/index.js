require("dotenv").config({ path: ".env.local" });

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const HomeModel = require("./models/home.js")

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL)

app.get("/gethomes", (req,res)=>{
    HomeModel.findOne({})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("Server is running.")
})