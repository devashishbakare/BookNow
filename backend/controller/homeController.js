const testAPI = (req, res) => {
  return res.status(200).json({ message: "request receiving" });
};

module.exports = {
  testAPI,
};
