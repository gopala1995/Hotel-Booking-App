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

  const errstatus = err.status || 500
  const errMessage = err.message || "something went wrong"

  return res.status(errstatus).json({
    success: false,
    status:errstatus,
    message :errMessage,
    stack: err.stack
  })
})

app.listen(2345, async () => {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (err) {
    console.log(err.message);
  }
});
