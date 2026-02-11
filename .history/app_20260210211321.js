const express = require('express');
const app =express();







app.get("/",(req,res)=>{
    console.log(req)
    res.status(200).json({
        message : "Success"
    })
    res.send("Hello World");
})








app.listen(3001,()=> {
    console.log("Server is running on port 3001");
})