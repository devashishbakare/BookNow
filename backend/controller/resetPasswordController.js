const crypto = require("crypto");
const ResetPassword = require("../model/resetPassword");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const { transporter, renderTemplate } = require("../config/nodeMailer");
const forgotPassword = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({
        message:
          "User Not Found, Please create account or login with google or github",
      });
    }
    const token = crypto.randomBytes(32).toString("hex");
    const nextOneHourDate = Date.now() + 3600000;
    const resetPasswordInformation = new ResetPassword({
      email,
      token,
      tokenExpire: nextOneHourDate,
    });
    await resetPasswordInformation.save();
    // send mail here
    const url = `http://localhost:5173/resetPassword/${token}`;
    const resetPasswordInfo = {
      name: user.name,
      url,
    };
    let htmlPage = renderTemplate({ resetPasswordInfo }, "/resetPassword.ejs");
    const storeResponse = await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: "manageincident@gmail.com",
          to: email,
          subject: "BookNow Reset Password",
          html: htmlPage,
        },
        (err, info) => {
          if (err) {
            return reject(err);
          }
          resolve(info);
        }
      );
    });
    // console.log(storeResponse);
    // console.log(email, user, token);
    return res
      .status(200)
      .json({ message: "token has been generated and mail has been sent" });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "something went wrong while creating token for forgot password",
    });
  }
};

const reset = async (req, res) => {
  try {
    const { resetPasswordToken, password } = req.body;
    const userResetPasswordInfo = await ResetPassword.findOne({
      token: resetPasswordToken,
      tokenExpire: { $gt: Date.now() },
    });
    if (!userResetPasswordInfo) {
      return res.status(400).json({
        message: "Password reset token is invalid or has expired.",
      });
    }

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    const updatePassword = {
      $set: {
        password: hash,
      },
    };
    const response = await User.findOneAndUpdate(
      { email: userResetPasswordInfo.email },
      updatePassword
    );

    await ResetPassword.deleteOne({ email: userResetPasswordInfo.email });

    return res
      .status(200)
      .json({ data: response, message: "password has been updated" });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "something went wrong, please try again later",
    });
  }
};

module.exports = {
  forgotPassword,
  reset,
};
