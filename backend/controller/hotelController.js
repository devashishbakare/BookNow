const BookingDetails = require("../model/bookingDetails");

const confirmBooking = async (req, res) => {
  console.log(req.body);
  try {
    const email = req.body.email;
    if (!email)
      return res.status(500).json({
        error: "email not found",
      });
    const bookingDetails = new BookingDetails({
      email,
      checkInDate: new Date(req.body.checkInDate),
      formData: req.body,
    });

    const bookingSummary = await bookingDetails.save();
    return res.status(200).json({
      message: "document has been created",
      data: bookingSummary,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const deleteAllDocuments = async (req, res) => {
  try {
    const deleteAll = await BookingDetails.deleteMany({});
    return res.status(200).json({
      message: "deleted",
      data: deleteAll,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  confirmBooking,
  deleteAllDocuments,
};
