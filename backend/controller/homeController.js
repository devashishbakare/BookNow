const { emailQueue } = require("../config/queue");
// todo : you can keep this in saparate file and just import it and use it
// const { Queue } = require("bullmq");
// const emailQueue = new Queue("bookNow-email-queue", {
//   connection: {
//     host: process.env.REDIS_HOST,
//     port: process.env.REDIS_PORT,
//     username: process.env.REDIS_USERNAME,
//     password: process.env.REDIS_PASSWORD,
//   },
// });

const bookingDetails = {
  _id: "664f35a2eb6d415ce1ba9614",
  bookingId: 15,
  name: "Devashish Bakare",
  email: "devashishbakare@gmail.com",
  phoneNumber: "9812345678",
  additionalContactInformation:
    "some additional data here some additional data here some additional data here some additional data here ",
  hotelName: "Novotel Pune Viman Nagar Road",
  hotelId: "661f6f36f25dc8cba19aefcc",
  totalAmount: "2999",
  paymentMethod: "Pay On Arrival",
  roomPackage: "661e08da50e4a5aeee946958",
};

const testAPI = (req, res) => {
  return res.status(200).json({ message: "request receiving" });
};

const addToEmailQueue = async (req, res) => {
  const { to, data } = req.body;
  try {
    console.log(to);
    console.log(data);
    await emailQueue.add("confirm booking", {
      from: "booknow@gmail.com",
      to,
      subject: "job has been added to queue",
      data,
    });
    return res.status(200).json("added to queue");
  } catch (error) {
    return res.status(500).json("something went wrong while adding to queue");
  }
};
const renderTemplate = async (req, res) => {
  return res.render("bookingPDFTemplate", { bookingDetails });
};
module.exports = {
  testAPI,
  addToEmailQueue,
  renderTemplate,
};
