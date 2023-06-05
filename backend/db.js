const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect("mongodb+srv://arpitmanuja000:arpitmanuja000@cluster0.udqmvcz.mongodb.net/?retryWrites=true&w=majority", connectionParams);
    console.log("Connected to the database successfully");
  } catch (error) {
    console.log(error);
    console.log("Could not connect to the database!");
  }
};
