const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { name, email, password, confirm_password, phone_number } = req.body;
    if (confirm_password !== password) {
      return res
        .status(400)
        .json({ error: "password and confirm password not matched" });
    }
    const registerEmail = await User.findOne({ email });
    if (registerEmail) {
      return res.status(400).json({ error: "email is already registered" });
    }

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const userDetails = new User({
      name,
      email,
      phoneNumber: phone_number,
      password: hash,
    });

    const user = await userDetails.save();

    const payload = {
      userId: user._id,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "3d",
    });

    return res.status(200).json({
      message: "User has been resigister successfully",
      data: token,
      userDetails: user,
    });
  } catch (error) {
    return res.status(500).json({ error: "something went wrong" });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "email or password not correct" });
    }
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "email or password not correct" });
    }
    const payload = {
      userId: user._id,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "3d",
    });

    return res.status(200).json({
      message: "User has been login successfully",
      data: token,
      userDetails: user,
    });
  } catch (error) {
    return res.status(500).json({ error: "something went wrong" });
  }
};

module.exports = {
  signIn,
  signUp,
};
