const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://kangjames2003:TkQivEi4gufoBALM@cluster0.uxr3ldq.mongodb.net/";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
//hello world
//wow I wanna play
