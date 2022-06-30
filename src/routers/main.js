/*get post patch method yha call hota hai aur router export hota hai*/ 

const express = require("express");
const {route }=require("express/lib/application")
const router =new express.Router();
const Colection=require("../models/list");

// router.get("/",(req,res)=>
// {
//     res.render("index")
// })

router.get("/", async (request,response)=>{
    const details=await Colection.findOne({"_id":"62baf05cab0a475886b67e64"})
    console.log(details)
   response.render("index",{
 
     details:details
   })
 })

router.get("/viewl",async (req,res)=>
{
    const details=await Colection.findOne({"_id":"62baf05cab0a475886b67e64"})
    console.log(details)
    res.render("viewl",{
        details:details 
    })
})
router.get("/about", async(req,res)=>
{
    const details=await Colection.findOne({"_id":"62baf05cab0a475886b67e64"})
    console.log(details)
    res.render("about",{
        details:details 
    })
})
router.get("/customer",async (req,res)=>
{
    const details=await Colection.findOne({"_id":"62baf05cab0a475886b67e64"})
    console.log(details)
    res.render("customer",{
        details:details 
    })
})
router.get("/profile",async (req,res)=>
{
    const details=await Colection.findOne({"_id":"62baf05cab0a475886b67e64"})
    console.log(details)
    res.render("profile",{
        details:details 
    })
})

module.exports = router;