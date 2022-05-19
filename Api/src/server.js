const app = require("./index");
const connect = require("../src/config/db");
const authRoute = require("../src/models/auth.model.js");
const hotelRoute = require("../src/models/hotel.model.js");
const roomRoute = require("../src/models/room.model.js");
const userRoute = require("../src/models/user.model.js");

app.use("/auth", authRoute);
app.use("/hotel", hotelRoute);
app.use("/room", roomRoute);
app.use("/user", userRoute);

app.listen(2345, async () => {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (err) {
    console.log(err.message);
  }
});
