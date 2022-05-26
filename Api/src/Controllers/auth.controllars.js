const express = require("express")

const router = express.Router()


router.get("/register", async(req,res,next)=>{
    try{

    }catch(err){
      next(err)
    }
  })
  

module.exports = router