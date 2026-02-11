const express = require('express');
const app =express();







app.get("/",(req,res)=>{
    console.log(req)
    res.status
    res.send("Hello World");
})








app.listen(3001,()=> {
    console.log("Server is running on port 3001");
})