const express = require("express")

const router = express.Router()
const HotelSchema = require("../models/Hotel.model")

//CREATE
router.post("/",async(req,res)=>{
    try{
  const hotels = await HotelSchema.create(req.body)
  return res.status(201).send(hotels)
    }catch(err){
      console.log(err.message)
      res.send(500).json(err)
    }
})
//UPDATE
//DELETE
//GET
//GET_ALL


router.get("/", async(req,res)=>{
  res.send("hello, this is hotel")
})

module.exports = router