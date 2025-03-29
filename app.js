const express = require("express")
const app = express()
const mongoose = require('mongoose');
const connectToDatabase = require("./database");
require('dotenv').config();

//Alternative
//const app = required('express')()


connectToDatabase();



app.get("/",(req,res)=>{
    console.log(req)
    res.send("Hello World")
})



app.listen(3000,()=>{
    console.log("Nodejs server has started at port 3000")
})