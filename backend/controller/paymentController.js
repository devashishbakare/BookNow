const Razorpay = require("razorpay");
const crypto = require("crypto");
const RoomPackage = require("../model/roomPackage");
const createBooking = async (req, res) => {
  try {
    const { amount, roomPackageId } = req.body;

    const roomPackageInfo = await RoomPackage.findById(roomPackageId);
    if (roomPackageInfo.price != amount) {
      return res
        .status(404)
        .json({ message: "tempered with amount, we can't proceed" });
    }
    var instance = new Razorpay({
      key_id: process.env.REZ_KEY,
      key_secret: process.env.REZ_SECRET,
    });

    var options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "order_rcptid_11",
    };
    instance.orders.create(options, function (err, booking) {
      if (err) {
        return res
          .status(500)
          .json("something went wrong while creating order");
      }
      console.log(booking);
      return res.status(200).json({ data: booking });
    });
  } catch (error) {
    return res.status(500).json("Error in creating order");
  }
};

const verifyBooking = async (req, res) => {
  const { booking_id, razorpay_payment_id, razorpay_signature } = req.body;

  let body = booking_id + "|" + razorpay_payment_id;

  let expectedSignature = crypto
    .createHmac("sha256", process.env.REZ_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    return res.status(200).json({ message: "payment has been varified" });
  } else {
    return res
      .status(500)
      .json({ message: "payment has failed in verification" });
  }
};

module.exports = {
  createBooking,
  verifyBooking,
};
