const Host = require("../model/hotelHost");
const addHost = async (req, res) => {
  const { name, joinDate, phoneNumber } = req.body;

  if (!name || !joinDate || !phoneNumber) {
    return res.status(400).json({
      message: "input data is not sufficient",
    });
  }
  try {
    const hostPresent = await Host.find({ phoneNumber });
    if (hostPresent) {
      return res.status(409).json({ message: "host already exist" });
    }
    const hostDetails = new Host({ name, joinDate, phoneNumber });
    const host = await hostDetails.save();
    return res
      .status(200)
      .json({ data: host._id, message: "Host added successfully" });
  } catch (error) {
    return res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = {
  addHost,
};
