const mongoose = require("mongoose")
const ConnectionString = "mongodb+srv://manilamagar80:manila123456789@cluster0.xwpoe.mongodb.net/?appName=Cluster0"
async function connectToDatabase(){
    await mongoose.connect(ConnectionString)
    console.log("Connected To DB Successfully")
}

module.exports = connectToDatabase