const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://kangjames2003:TkQivEi4gufoBALM@cluster0.uxr3ldq.mongodb.net/";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected TO DB"))
  .catch((err) => console.log(err));
//hello world
//wow I wanna play
