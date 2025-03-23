const express = require("express")
const app = express()

//Alternative
//const app = required('express')()


app.get("/",(req,res)=>{
    console.log(req)
    res.send("Hello World")
})



app.listen(3000,()=>{
    console.log("Nodejs server has started at port 3000")
})
