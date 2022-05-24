const app = require("./index");
const connect = require("../src/config/db");
const authRoute = require("../src/Controllers/auth.controllars.js");
const hotelRoute = require("../src/Controllers/hotel.controllers.js");
const roomRoute = require("../src/Controllers/room.controllers.js");
const userRoute = require("../src/Controllers/user.controllers.js");

app.use("/auth", authRoute);
app.use("/hotel", hotelRoute);
app.use("/room", roomRoute);
app.use("/user", userRoute);

app.use((err,req,res,next)=>{
  res.status(500).json("Hello error from handeler")
})

app.listen(2345, async () => {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (err) {
    console.log(err.message);
  }
});
