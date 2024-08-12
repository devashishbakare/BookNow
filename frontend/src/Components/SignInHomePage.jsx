import { SignInForm } from "./SignInForm";
import { useState } from "react";
import { FcInfo } from "react-icons/fc";
import { LuDot } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../utils/notification";
import { forgotPassword } from "../utils/api";

import WhiteSpinner from "../utils/WhiteSpinner";
import { ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import { ForgotPasswordSchema } from "../ValidationSchemas/ForgotPasswordSchema";
export const SignInHomePage = () => {
  const [localLoader, setLocalLoader] = useState(false);
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const showForgotPasswordModal = (status) => {
    setForgotPasswordModal(status);
  };

  const initialValues = {
    email: "",
  };

  const forgotPasswordFormik = useFormik({
    initialValues: { ...initialValues, formType: "forgotPassword" },
    validationSchema: ForgotPasswordSchema,
    onSubmit: async (values, action) => {
      setLocalLoader(true);
      //console.log(values.email);
      const response = await forgotPassword(values.email);
      if (response.success) {
        //console.log("show noti");
        showSuccessNotification("Email has been sent, Check your email");
      } else {
        //console.log("show else noti");
        showErrorNotification("Something went wrong, please try again later");
      }
      setLocalLoader(false);
      action.resetForm();
    },
  });

  return (
    <>
      {forgotPasswordModal === false ? (
        <div className="h-[100vh] w-[100vw] max-w[1150px] md:flex items-center justify-center">
          <div className="h-auto w-full flex flex-col gap-4 md:hidden">
            <div className="h-[300px] min-w-[370px] w-full centerDiv">
              <img
                src="http://res.cloudinary.com/djgouef8q/image/upload/v1707315678/eu3iahhd2jgvx1jdiuqx.png"
                alt="hotelImage"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[500px] w-full min-w-[370px] overflow-y-scroll">
              <SignInForm showForgotPasswordModal={showForgotPasswordModal} />
            </div>
          </div>
          <div className="hidden md:flex h-auto w-[767px] border-2 border-gray-200 baseColor rounded-md">
            <div className="min-h-[500px] w-[50%]">
              <img
                src="http://res.cloudinary.com/djgouef8q/image/upload/v1707548707/jilrdxdgvnvtkobg0oew.jpg"
                alt="hotelImage"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-full w-[50%] min-w-[370px] centerDiv">
              <SignInForm showForgotPasswordModal={showForgotPasswordModal} />
            </div>
          </div>
        </div>
      ) : (
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
            <div className="centerToPage left-0 h-auto w-[350px] flex flex-col rounded-md p-2 shadow-lg border-[1px] border-gray-400 bg-[#f4f4f4]">
              <div className="relative h-[65px] w-full addFont centerDiv text-[1.3rem] bg-[#003b95] text-white">
                BookNow
              </div>
              <span
                onClick={() => showForgotPasswordModal(false)}
                className="absolute h-[65px] right-[10px] w-[50px] centerDiv cursor-pointer"
              >
                <IoMdClose className="text-[2rem] text-white" />
              </span>
              <form
                onSubmit={forgotPasswordFormik.handleSubmit}
                className="h-auto w-full flex flex-col gap-2"
              >
                <div className="h-auto w-full flex flex-col">
                  <span className="h-[50px] w-[90%] p-2 addFont text-[1.2rem] ml-3 mt-2">
                    Email
                  </span>
                  <div className="h-[50px] w-[92%] border-[1px] border-gray-400 rounded-md ml-4">
                    <input
                      type="text"
                      className="h-full w-[80%] ml-4 outline-none baseColor text-[1.1rem]"
                      name="email"
                      value={forgotPasswordFormik.values.email}
                      onChange={forgotPasswordFormik.handleChange}
                      onBlur={forgotPasswordFormik.handleBlur}
                    />
                  </div>
                  {forgotPasswordFormik.errors.email &&
                  forgotPasswordFormik.touched.email ? (
                    <div className="h-auto mt-1 w-full pl-5 theamColor addFont text-[15px] truncate">
                      {forgotPasswordFormik.errors.email}
                    </div>
                  ) : null}
                </div>

                <div className="h-auto w-full flex flex-col gap-2">
                  <div className="h-[50px] w-full flex">
                    <span className="h-full w-[20%] flex justify-center mt-2">
                      <FcInfo className="text-[1.5rem]" />
                    </span>
                    <span className="h-full w-[80%] addFont">
                      Reset Your Password in Simple Steps:
                    </span>
                  </div>
                  {/* <span className="h-[40px] w-[90%] ml-4 addFont flex items-center gap-1"></span> */}
                  <div className="h-auto w-full flex flex-col pl-6 gap-2">
                    <div className="h-auto w-full flex items-center">
                      <LuDot className="text-[2.3rem]" />{" "}
                      <span className="">Enter Your Email Address</span>
                    </div>

                    <div className="h-auto w-full flex items-center">
                      <LuDot className="text-[2.3rem]" />{" "}
                      <span className="">Check Your Email</span>
                    </div>

                    <div className="h-auto w-full flex items-center">
                      <LuDot className="text-[2.3rem]" />{" "}
                      <span className="">Follow the Link</span>
                    </div>

                    <div className="h-auto w-full flex items-center">
                      <LuDot className="text-[2.3rem]" />{" "}
                      <span className="">Create a New Password</span>
                    </div>
                    <div className="h-auto w-full flex items-center">
                      <LuDot className="text-[2.3rem]" />{" "}
                      <span className="">Access Your Account</span>
                    </div>
                  </div>
                </div>
                <div className="h-[90px] w-full centerDiv">
                  <button
                    type="submit"
                    className="h-[60%] w-[85%] rounded-full bg-[#003b95] cursor-pointer min-h-[50px]"
                  >
                    {localLoader ? (
                      <div className="h-full w-full centerDiv">
                        <WhiteSpinner />
                      </div>
                    ) : (
                      <span className="text-[1rem] text-[white]">
                        Request Password Reset
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
};
