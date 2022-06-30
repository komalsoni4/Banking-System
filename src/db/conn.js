/*connection with database*/
const mongoose= require('mongoose');
const Colection=require("../models/list");
mongoose.connect("mongodb://localhost:27017/CustomerData").then(() =>{
    console.log("Connection successful");
}).catch((e)=>{
   console.log("No connection");
   console.log(e);
})