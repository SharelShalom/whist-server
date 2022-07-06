const mongoose = require("mongoose");
const uri = "mongodb://mongo:27017/Whist";

module.exports = async function connect() {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connect");
  });
};
