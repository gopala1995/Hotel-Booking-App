const express = require("express");

const router = express.Router();
const HotelSchema = require("../models/Hotel.model");

//CREATE
router.post("/", async (req, res) => {
  try {
    const hotels = await HotelSchema.create(req.body);
    return res.status(201).send(hotels);
  } catch (err) {
    console.log(err.message);
    res.send(500).json(err);
  }
});
//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const UpdateHotels = await HotelSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(201).send(UpdateHotels);
  } catch (err) {
    console.log(err.message);
    res.send(500).json(err);
  }
});
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const DeleteHotels = await HotelSchema.findByIdAndDelete(req.params.id);
    return res.status(201).send(DeleteHotels);
  } catch (err) {
    console.log(err.message);
    res.send(500).json(err);
  }
});
//GET
router.get("/:id", async (req, res) => {
  const hotel = await HotelSchema.findById(req.params.id).lean().exec();
  res.status(200).send(hotel);
});
//GET_ALL
router.get("/",async(req,res,next)=>{
  try{
    const hotels = await HotelSchema.find().lean().exec()
    res.status(200).send(hotels)
  }catch(err){
      next(err)
  }
  
})


module.exports = router;
