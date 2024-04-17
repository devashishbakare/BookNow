/*
 Room Type: eg : single, double, suite
 Room Capacity: Number of guests the room can accommodat
 Meal included: yes, no
 numberOfBeds : 2
 numberOfBathrooms : 2
 total Price: The total price for the booking, including taxes and any additional fees.
 {
  "roomType": "Standard",
  "roomCapacity": 2,
  "numberOfBeds": 1,
  "numberOfBathrooms": 1,
  "mealsIncluded": false,
  "price": 9999
}
*/
const mongoose = require("mongoose");
const roomPackageSchema = mongoose.Schema({
  roomType: {
    type: String,
    required: true,
  },
  numberOfPeopleAllowed: {
    type: Number,
    required: true,
  },
  numberOfBeds: {
    type: Number,
    required: true,
  },
  numberOfBathrooms: {
    type: Number,
    required: true,
  },
  mealsIncluded: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("RoomPackage", roomPackageSchema);
