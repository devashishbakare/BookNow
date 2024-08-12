import React from "react";
import { GoEyeClosed, GoEye } from "react-icons/go";
import { useFormik } from "formik";
import { useState } from "react";
import { ResetPasswordSchema } from "../ValidationSchemas/ResetPasswordSchema";
import { useNavigate, useParams } from "react-router-dom";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../utils/notification";
import { updatePassword } from "../utils/api";
import { ToastContainer } from "react-toastify";
import CirculareSpinner from "../utils/CirculareSpinner";
import WhiteSpinner from "../utils/WhiteSpinner";
export const ResetPassword = () => {
  const [localLoader, setLocalLoader] = useState(false);
  const [showPasswordStatus, setShowPasswordStatus] = useState(false);
  const [confirmPasswordStatus, setConfirmPasswordStatus] = useState(false);
  const { resetPasswordToken } = useParams();
  const navigate = useNavigate();
  const initialValues = {
    password: "",
    confirm_password: "",
  };

  const ResetPasswordFormik = useFormik({
    initialValues: { ...initialValues, formType: "resetPassword" },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values, action) => {
      setLocalLoader(true);
      const resetPasswordInfo = {
        password: values.password,
        resetPasswordToken,
      };
      const response = await updatePassword(resetPasswordInfo);
      if (response.success) {
        setTimeout(() => {
          showSuccessNotification("Password has been updated successfully");
        }, 1000);
        navigate("/signIn");
      } else {
        showErrorNotification(
          "Password reset token is invalid or has expired, try again later"
        );
      }
      setLocalLoader(false);
      action.resetForm();
    },
  });
  return (
    <div className="h-[100vh] w-[100vw] centerDiv shadow-lg">
      <div className="relative h-full w-full centerDiv max-w-[1150px]">
        <img
          src="http://res.cloudinary.com/djgouef8q/image/upload/v1723028076/jwe7paini9d4g5j2inla.png"
          alt="bg-image"
          className="h-full w-full bg-cover md:hidden"
        />
        <img
          src="http://res.cloudinary.com/djgouef8q/image/upload/v1723028023/hc3lqgymxrshnpv3otl5.png"
          alt="bg-image"
          className="hidden md:flex md:h-full md:w-full md:bg-cover"
        />
        <form
          onSubmit={ResetPasswordFormik.handleSubmit}
          className="centerToPage left-0 h-auto w-[350px] flex flex-col rounded-md p-2 shadow-lg border-[1px] border-gray-400 bg-[#f4f4f4] "
        >
          <div className="h-[65px] w-full addFont centerDiv text-[1.3rem] bg-[#003b95] text-white">
            BookNow
          </div>
          <div className="h-auto w-full flex flex-col gap-2">
            <div className="h-[40px] w-full flex items-center addFont text-[1.1rem] pl-4 mt-2">
              Password
            </div>
            <div className="h-auto w-full flex flex-col gap-1 centerDiv">
              <div className="h-[50px] w-[95%] flex items-center rounded-md border-[1px] border-gray-500 min-h-[40px]">
                <input
                  type={showPasswordStatus ? "text" : "password"}
                  name="password"
                  className="h-[85%] w-[80%] ml-4 outline-none baseColor placeHolder"
                  value={ResetPasswordFormik.values.password}
                  onChange={ResetPasswordFormik.handleChange}
                  onBlur={ResetPasswordFormik.handleBlur}
                />
                {ResetPasswordFormik.values.password.length > 0 && (
                  <span
                    onClick={() => setShowPasswordStatus(!showPasswordStatus)}
                    className="h-full w-[17%] mr-2 centerDiv"
                  >
                    {showPasswordStatus == false ? (
                      <GoEyeClosed className="text-[1.3rem]" />
                    ) : (
                      <GoEye className="text-[1.3rem]" />
                    )}
                  </span>
                )}
              </div>
              {ResetPasswordFormik.errors.password &&
              ResetPasswordFormik.touched.password ? (
                <div className="h-auto w-full mt-1 pl-5 theamColor addFont text-[15px] z-10">
                  {ResetPasswordFormik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="h-[40px] w-full flex items-center addFont text-[1.1rem] pl-4">
              Confirm Password
            </div>
            <div className="h-auto w-full flex flex-col gap-1 centerDiv">
              <div className="h-[50px] w-[95%] flex items-center rounded-md border-[1px] border-gray-500 min-h-[40px]">
                <input
                  type={confirmPasswordStatus ? "text" : "password"}
                  name="confirm_password"
                  className="h-[85%] w-[80%] ml-4 outline-none baseColor placeHolder"
                  value={ResetPasswordFormik.values.confirm_password}
                  onChange={ResetPasswordFormik.handleChange}
                  onBlur={ResetPasswordFormik.handleBlur}
                />
                {ResetPasswordFormik.values.confirm_password.length > 0 && (
                  <span
                    onClick={() =>
                      setConfirmPasswordStatus(!confirmPasswordStatus)
                    }
                    className="h-full w-[17%] mr-2 centerDiv"
                  >
                    {ResetPasswordFormik.values.confirm_password.length > 0 &&
                    confirmPasswordStatus == false ? (
                      <GoEyeClosed className="text-[1.3rem]" />
                    ) : (
                      <GoEye className="text-[1.3rem]" />
                    )}
                  </span>
                )}
              </div>
              {ResetPasswordFormik.errors.confirm_password &&
              ResetPasswordFormik.touched.confirm_password ? (
                <div className="h-auto mt-1 w-full pl-5 theamColor addFont text-[15px] truncate">
                  {ResetPasswordFormik.errors.confirm_password}
                </div>
              ) : null}
            </div>
            <div className="h-[90px] w-full centerDiv">
              <button
                type="submit"
                className="h-[60%] w-[60%] rounded-full bg-[#003b95] cursor-pointer min-h-[50px]"
              >
                {localLoader ? (
                  <div className="h-full w-full centerDiv">
                    <WhiteSpinner />
                  </div>
                ) : (
                  <span className="text-[1rem] text-[white]">submit</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
