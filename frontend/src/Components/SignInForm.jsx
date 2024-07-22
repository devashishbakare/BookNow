import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useFormik } from "formik";
import { SignInSchema } from "../ValidationSchemas/SignInSchema";
import { SignUpSchema } from "../ValidationSchemas/signUpSchema";
import { signIn, signUp } from "../utils/api";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../utils/notification";
import { ToastContainer } from "react-toastify";

export const SignInForm = () => {
  const navigate = useNavigate();
  const pathToNavigate = useLocation().state;
  const [isUserSignIn, setIsUserSignIn] = useState(true);
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
  };

  const signUpFormik = useFormik({
    initialValues: { ...initialValues, formType: "signup" },
    validationSchema: SignUpSchema,
    onSubmit: async (values, action) => {
      const response = await signUp(values);
      if (response.success === true) {
        localStorage.setItem("token", response.data);
        showSuccessNotification("Sign Up Successfull");
        navigate(`${pathToNavigate}`);
      } else {
        showErrorNotification(response.error);
      }
      action.resetForm();
    },
  });

  const signInFormik = useFormik({
    initialValues: { ...initialValues, formType: "signin" },
    validationSchema: SignInSchema,
    onSubmit: async (values, action) => {
      const response = await signIn(values);
      if (response.success === true) {
        localStorage.setItem("token", response.data);
        showSuccessNotification("Login Successfull");
        navigate(`${pathToNavigate}`);
      } else {
        showErrorNotification(response.error);
      }
      action.resetForm();
    },
  });
  // todo : here we need to add the production url when we deploy our backend
  const handleSignInWithGoogle = () => {
    localStorage.setItem("pathToNavigate", pathToNavigate);
    window.location.href = "http://localhost:8000/auth/google";
  };

  const handleSignUpWithGitHub = () => {
    localStorage.setItem("pathToNavigate", pathToNavigate);
    window.location.href = "http://localhost:8000/auth/github";
  };

  return (
    <>
      <div className="h-full w-full centerDiv overflow-y-scroll">
        {isUserSignIn ? (
          <>
            <form
              onSubmit={signInFormik.handleSubmit}
              className="h-full w-[370px] flex flex-col gap-2"
            >
              <div className="h-[85%] w-full flex flex-col">
                <div className="h-[8%] w-[80%] text-[19px] addFont m-3">
                  Sign In
                </div>
                <div className="h-[18%] w-full flex flex-col gap-1 centerDiv min-h-[90px]">
                  <div className="h-[60%] w-[95%] flex items-center rounded-3xl border-[1px] border-gray-500 min-h-[50px]">
                    <input
                      type="email"
                      name="email"
                      className="h-[85%] w-[90%] ml-4 outline-none baseColor placeHolder"
                      placeholder="Email"
                      value={signInFormik.values.email}
                      onChange={signInFormik.handleChange}
                      onBlur={signInFormik.handleBlur}
                      data-testid="signIn-email-input-testid"
                    />
                  </div>
                  {signInFormik.errors.email && signInFormik.touched.email ? (
                    <>
                      <p className="h-auto w-full pl-5 theamColor addFont text-[15px] truncate">
                        {signInFormik.errors.email}
                      </p>
                    </>
                  ) : null}
                </div>
                <div className="h-[18%] w-full flex flex-col gap-1 centerDiv min-h-[90px]">
                  <div className="h-[60%] w-[95%] flex items-center rounded-3xl border-[1px] border-gray-500 min-h-[50px]">
                    <input
                      type="password"
                      name="password"
                      className="h-[85%] w-[90%] ml-4 outline-none baseColor placeHolder"
                      placeholder="Password"
                      value={signInFormik.values.password}
                      onChange={signInFormik.handleChange}
                      onBlur={signInFormik.handleBlur}
                      data-testid="signIn-password-input-testid"
                    />
                  </div>
                  {signInFormik.errors.password &&
                  signInFormik.touched.password ? (
                    <>
                      <p className="h-auto w-full pl-5 theamColor addFont text-[15px] truncate">
                        {signInFormik.errors.password}
                      </p>
                    </>
                  ) : null}
                </div>
                <div className="h-[7%] w-full flex flex-row-reverse">
                  <p className="mr-5 text-[15px] theamColor">
                    Forgot Password?
                  </p>
                </div>
                <div className="h-[12%] w-full flex items-center centerDiv mt-2">
                  <button
                    type="submit"
                    className="h-[90%] w-[90%] rounded-full text-[white] bg-[#003b95] text-[1rem] cursor-pointer min-h-[50px]"
                    data-testid="signIn-submit-button"
                  >
                    Sign-In
                  </button>
                </div>
                <div className="h-[7%] w-full flex centerDiv gap-2 mt-3">
                  <hr className="w-[40%] border-gray-400" />
                  <p className="">or</p>
                  <hr className="w-[40%] border-gray-400 mr-4" />
                </div>
                <div className="h-[15%] w-[95%] flex gap-[20px] centerDiv min-h-[50px]">
                  <FcGoogle
                    onClick={() => handleSignInWithGoogle()}
                    className="text-[45px] cursor-pointer"
                  />
                  <FaGithub
                    onClick={() => handleSignUpWithGitHub()}
                    className="text-[45px] cursor-pointer"
                  />
                </div>
              </div>
              <div className="h-[15%] w-full centerDiv gap-1 min-h-[50px]">
                <span className="addFont text-[15px]">
                  Do not have an account?{" "}
                </span>
                <span
                  className="addFont text-[15px] theamColor underline cursor-pointer"
                  onClick={() => setIsUserSignIn(false)}
                  data-testid="show-user-signup-form"
                >
                  Sign-Up
                </span>
                <span className="addFont text-[15px]">here</span>
              </div>
            </form>
          </>
        ) : (
          <>
            <form
              onSubmit={signUpFormik.handleSubmit}
              className="h-full w-[370px] flex flex-col gap-2"
            >
              <div className="min-h-[500px] w-full flex flex-col">
                <div className="h-[8%] w-[80%] text-[19px] addFont ml-4 flex items-center min-h-[50px]">
                  Sign Up
                </div>
                <div className="h-[20%] w-full flex flex-col gap-1 centerDiv min-h-[70px]">
                  <div className="h-[60%] w-[95%] flex items-center rounded-3xl border-[1px] border-gray-500 min-h-[40px]">
                    <input
                      type="text"
                      name="name"
                      className="h-[85%] w-[90%] ml-4 outline-none baseColor placeHolder"
                      placeholder="name"
                      value={signUpFormik.values.name}
                      onChange={signUpFormik.handleChange}
                      onBlur={signUpFormik.handleBlur}
                      data-testid="signUp-name-input-testid"
                    />
                  </div>
                  {signUpFormik.errors.name && signUpFormik.touched.name ? (
                    <>
                      <p className="h-auto w-full pl-5 theamColor addFont text-[15px] truncate">
                        {signUpFormik.errors.name}
                      </p>
                    </>
                  ) : null}
                </div>
                <div className="h-[20%] w-full flex flex-col gap-1 centerDiv  min-h-[70px]">
                  <div className="h-[60%] w-[95%] flex items-center rounded-3xl border-[1px] border-gray-500 min-h-[40px]">
                    <input
                      type="email"
                      name="email"
                      className="h-[85%] w-[90%] ml-4 outline-none baseColor placeHolder"
                      placeholder="Email"
                      value={signUpFormik.values.email}
                      onChange={signUpFormik.handleChange}
                      onBlur={signUpFormik.handleBlur}
                      data-testid="signUp-email-input-testid"
                    />
                  </div>
                  {signUpFormik.errors.email && signUpFormik.touched.email ? (
                    <>
                      <p className="h-auto w-full pl-5 theamColor addFont text-[15px] truncate">
                        {signUpFormik.errors.email}
                      </p>
                    </>
                  ) : null}
                </div>
                <div className="h-[20%] w-full flex flex-col gap-1 centerDiv  min-h-[70px]">
                  <div className="h-[60%] w-[95%] flex items-center rounded-3xl border-[1px] border-gray-500 min-h-[40px]">
                    <input
                      type="password"
                      name="password"
                      className="h-[85%] w-[90%] ml-4 outline-none baseColor placeHolder"
                      placeholder="Password"
                      value={signUpFormik.values.password}
                      onChange={signUpFormik.handleChange}
                      onBlur={signUpFormik.handleBlur}
                      data-testid="signUp-password-input-testid"
                    />
                  </div>
                  {signUpFormik.errors.password &&
                  signUpFormik.touched.password ? (
                    <>
                      <p className="h-auto w-full pl-5 theamColor addFont text-[15px]">
                        {signUpFormik.errors.password}
                      </p>
                    </>
                  ) : null}
                </div>
                <div className="h-[20%] w-full flex flex-col gap-1 centerDiv  min-h-[70px]">
                  <div className="h-[60%] w-[95%] flex items-center rounded-3xl border-[1px] border-gray-500 min-h-[40px]">
                    <input
                      type="password"
                      name="confirm_password"
                      className="h-[85%] w-[90%] ml-4 outline-none baseColor placeHolder"
                      placeholder="confirm password"
                      value={signUpFormik.values.confirm_password}
                      onChange={signUpFormik.handleChange}
                      onBlur={signUpFormik.handleBlur}
                      data-testid="signUp-confirm_password-input-testid"
                    />
                  </div>
                  {signUpFormik.errors.confirm_password &&
                  signUpFormik.touched.confirm_password ? (
                    <>
                      <p className="h-auto w-full pl-5 theamColor addFont text-[15px] truncate">
                        {signUpFormik.errors.confirm_password}
                      </p>
                    </>
                  ) : null}
                </div>

                <div className="h-[20%] w-full flex flex-col gap-1 centerDiv  min-h-[70px]">
                  <div className="h-[60%] w-[95%] flex items-center rounded-3xl border-[1px] border-gray-500 min-h-[40px]">
                    <input
                      type="text"
                      name="phone_number"
                      className="h-[85%] w-[90%] ml-4 outline-none baseColor placeHolder"
                      placeholder="Phone Number"
                      value={signUpFormik.values.phone_number}
                      onChange={signUpFormik.handleChange}
                      onBlur={signUpFormik.handleBlur}
                      data-testid="signUp-phone_number-input-testid"
                    />
                  </div>
                  {signUpFormik.errors.phone_number &&
                  signUpFormik.touched.phone_number ? (
                    <>
                      <p className="min-h-[40px] w-full pl-5 theamColor addFont text-[15px]">
                        {signUpFormik.errors.phone_number}
                      </p>
                    </>
                  ) : null}
                </div>

                <div className="h-[13%] w-full flex items-center centerDiv mt-2">
                  <button
                    type="submit"
                    className="h-[90%] w-[90%] rounded-full text-[white] bg-[#003b95] text-[1rem] cursor-pointer min-h-[50px]"
                  >
                    Sign-up
                  </button>
                </div>
                <div className="h-[7%] w-full flex centerDiv gap-2 mt-3">
                  <hr className="w-[40%] border-gray-400" />
                  <p className="">or</p>
                  <hr className="w-[40%] border-gray-400 mr-4" />
                </div>
                <div className="h-[15%] w-full flex gap-[20px] centerDiv min-h-[40px]">
                  <FcGoogle
                    onClick={() => handleSignInWithGoogle()}
                    className="text-[35px] mr-4 cursor-pointer"
                  />
                  <FaGithub
                    onClick={() => handleSignUpWithGitHub()}
                    className="text-[35px] mr-4 cursor-pointer"
                  />
                </div>
                <div className="h-[10%] w-full centerDiv gap-1 min-h-[50px]">
                  <span className="addFont text-[15px]">
                    Already have account?{" "}
                  </span>
                  <span
                    className="addFont text-[15px] theamColor underline cursor-pointer"
                    onClick={() => setIsUserSignIn(true)}
                  >
                    Sign-In
                  </span>
                  <span className="addFont text-[15px]">here</span>
                </div>
              </div>
            </form>
          </>
        )}
        <ToastContainer />
      </div>
    </>
  );
};
