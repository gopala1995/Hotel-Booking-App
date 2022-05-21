const express = require("express")

const router = express.Router()

router.get("/", async(req,res)=>{
  res.send("hello, this is auth")
})


router.get("/register", async(req,res)=>{
    res.send("hello, this is auth Register")
  })
  

module.exports = router