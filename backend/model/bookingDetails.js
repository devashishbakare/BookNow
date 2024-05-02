/*

booking schema
/? : bookingId : // here we need to generate this
string : full name
string : email
string : phone number
string : additional info
date : check in date
date : check out date
integer : no of adult
integer : no of children
double : total price

const boookingDetailsSchema = mongoose.Schema(
  {
    bookingId : {
        type : String, 
        default : "BOOKING"
    }
  { timestamps: true }
);

*/

const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const boookingDetailsSchema = mongoose.Schema(
  {
    bookingId: {
      type: Number,
      default: 0,
    },
    email: {
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
    formData: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  { timestamps: true }
);

boookingDetailsSchema.plugin(AutoIncrement, {
  inc_field: "bookingId",
});

const BookingDetails = mongoose.model("BookingDetails", boookingDetailsSchema);
module.exports = BookingDetails;
