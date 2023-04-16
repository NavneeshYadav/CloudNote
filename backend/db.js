const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://navneesh:navneesh@cluster0.jgzeykx.mongodb.net/NoteApp?retryWrites=true&w=majority";

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
