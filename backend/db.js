const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/React";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection Successful..."))
    .catch((err) => console.log(err));
};

module.exports = connectToMongo;
