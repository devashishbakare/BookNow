const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const RoomPackage = require("./roomPackage");

const boookingDetailsSchema = mongoose.Schema(
  {
    bookingId: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    additionalContactInformation: {
      type: String,
    },
    hotelName: {
      type: String,
      required: true,
    },
    hotelId: {
      type: String,
      required: true,
    },
    selectedDates: {
      type: [
        {
          month: Number,
          dates: [Number],
        },
      ],
      default: [],
    },
    totalAmount: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    roomPackage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RoomPackage",
    },
  },
  { timestamps: true }
);

boookingDetailsSchema.plugin(AutoIncrement, {
  inc_field: "bookingId",
});

const BookingDetails = mongoose.model("BookingDetails", boookingDetailsSchema);
module.exports = BookingDetails;
