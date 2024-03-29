const mongoose = require("mongoose");
// object[] : host{hostName, hostJoinedDate, hostContactNumber}
const hostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 4,
  },
  joinDate: {
    type: Date,
    default: Date.now,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Host", hostSchema);
