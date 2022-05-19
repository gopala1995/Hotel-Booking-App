const app = require("./index");
const connect = require("../src/config/db");


app.get("/", async(req,res)=>{
   res.send("Hey i'm responce")
})

app.listen(2345, async () => {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (err) {
    console.log(err.message);
  }
});
