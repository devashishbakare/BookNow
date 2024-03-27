const mongoose = require("mongoose");

// we have to connect with the db
// its take longer time so we use await for connect function to connect

const connectMongoDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongdo db has connected " + connect.connection.host);
  } catch (error) {
    console.log("something went wrong with db connect" + error.message);
    process.exit();
  }
};

module.exports = connectMongoDb;
