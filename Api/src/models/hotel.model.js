const express = require("express")

const router = express.Router()


//CREATE
router.post("/",(req,res)=>{
    
})
//UPDATE
//DELETE
//GET
//GET_ALL


router.get("/", async(req,res)=>{
  res.send("hello, this is hotel")
})

module.exports = router