const express = require('express');
const app =express();


app.use 




app.get("/",(req,res)=>{
    console.log(req)
    res.status(200).json({
        message : "Success"
    })
})








app.listen(3001,()=> {
    console.log("Server is running on port 3001");
})