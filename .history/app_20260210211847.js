const express = require('express');
const app =express();
const mongoose = require('mongoose');
const connectToDatabase = required ("./database");



app.use(express.json())
app.use(express.urlencoded({extended:true}))


connectToDatabase();




app.get("/",(req,res)=>{
    console.log(req)
    res.status(200).json({
        message : "Success"
    })
})




app.post("/book",async(req,res)=>{
    console.log(req.body)
    const {bookName,bookPrice,isbnNumber,authorName,publishedAt,publication} = req.body
    await Book.create({
        bookName,
        bookPrice,
        isbnNumber,
        authorName,
        publishedAt,
        publication
    })
    res.json({
        message : "Book Created successfully"
    })
})



app.listen(3001,()=> {
    console.log("Server is running on port 3001");
})