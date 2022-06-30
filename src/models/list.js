
const express=require("express");
const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    customer:[{

        name:String,  
        email:String,
        money:Number,
    },
]
})
const CList = new mongoose.model("CustomList",listSchema)
module.exports=CList;