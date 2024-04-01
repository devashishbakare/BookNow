import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { signInUpSchema } from "../ValidationSchemas";
export const SignInForm = () => {
  const [isUserSignIn, setIsUserSignIn] = useState(true);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    phoneNumber: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signInUpSchema,
      onSubmit: (values, action) => {
        // here we got the all values to make backend call to save a data
        console.log(values);
        action.resetForm();
      },
    });
  //console.log(handleSubmit);
  return (
    <>
      <div className="h-full w-full centerDiv overflow-y-scroll">
        <form
          onSubmit={handleSubmit}
          className="h-full w-[370px] flex flex-col gap-2"
        >
          {isUserSignIn ? (
            <>
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
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <>
                      <p className="h-auto w-full pl-5 theamColor addFont text-[15px] truncate">
                        {errors.email}
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
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.password && touched.password ? (
                    <>
                      <p className="h-auto w-full pl-5 theamColor addFont text-[15px] truncate">
                        {errors.password}
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
                  >
                    Sign-In
                  </button>
                </div>
                <div className="h-[7%] w-full flex centerDiv gap-2 mt-3">
                  <hr className="w-[40%] border-gray-400" />
                  <p className="">or</p>
                  <hr className="w-[40%] border-gray-400 mr-4" />
                </div>
                <div className="h-[15%] w-full centerDiv min-h-[50px]">
                  <FcGoogle className="text-[35px] mr-4 cursor-pointer" />
                </div>
              </div>
              <div className="h-[15%] w-full centerDiv gap-1 min-h-[50px]">
                <span className="addFont text-[15px]">
                  Don't have an account?{" "}
                </span>
                <span
                  className="addFont text-[15px] theamColor underline cursor-pointer"
                  onClick={() => setIsUserSignIn(false)}
                >
                  Sign-Up
                </span>
                <span className="addFont text-[15px]">here</span>
              </div>
            </>
          ) : (
            <>
              <div className="min-h-[500px] w-full flex flex-col">
                <div className="h-[8%] w-[80%] text-[19px] addFont ml-4 flex items-center min-h-[50px]">
                  Sign Up
                </div>
                <div className="h-[20%] w-full flex flex-col gap-1 centerDiv min-h-[70px]">
                  <div className="h-[60%] w-[95%] flex items-center rounded-3xl border-[1px] border-gray-500 addBorder min-h-[40px]">
                    <input
                      type="text"
                      name="name"
                      className="h-[85%] w-[90%] ml-4 outline-none baseColor placeHolder"
                      placeholder="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.name && touched.name ? (
                    <>
                      <p className="h-auto w-full pl-5 theamColor addFont text-[15px] truncate">
                        {errors.name}
                      </p>
                    </>
                  ) : null}
                </div>
                <div className="h-[20%] w-full flex flex-col gap-1 centerDiv  min-h-[70px]">
                  <div className="h-[60%] w-[95%] flex items-center rounded-3xl border-[1px] border-gray-500 addBorder min-h-[40px]">
                    <input
                      type="email"
                      name="email"
                      className="h-[85%] w-[90%] ml-4 outline-none baseColor placeHolder"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <>
                      <p className="h-auto w-full pl-5 theamColor addFont text-[15px] truncate">
                        {errors.email}
                      </p>
                    </>
                  ) : null}
                </div>
                <div className="h-[20%] w-full flex flex-col gap-1 centerDiv  min-h-[70px]">
                  <div className="h-[60%] w-[95%] flex items-center rounded-3xl border-[1px] border-gray-500 addBorder min-h-[40px]">
                    <input
                      type="password"
                      name="password"
                      className="h-[85%] w-[90%] ml-4 outline-none baseColor placeHolder"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.password && touched.password ? (
                    <>
                      <p className="h-auto w-full pl-5 theamColor addFont text-[15px] truncate">
                        {errors.password}
                      </p>
                    </>
                  ) : null}
                </div>
                <div className="h-[20%] w-full flex flex-col gap-1 centerDiv  min-h-[70px]">
                  <div className="h-[60%] w-[95%] flex items-center rounded-3xl border-[1px] border-gray-500 addBorder min-h-[40px]">
                    <input
                      type="password"
                      name="confirm_password"
                      className="h-[85%] w-[90%] ml-4 outline-none baseColor placeHolder"
                      placeholder="confirm password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.confirm_password && touched.confirm_password ? (
                    <>
                      <p className="h-auto w-full pl-5 theamColor addFont text-[15px] truncate">
                        {errors.confirm_password}
                      </p>
                    </>
                  ) : null}
                </div>

                <div className="h-[20%] w-full flex flex-col gap-1 centerDiv  min-h-[70px]">
                  <div className="h-[60%] w-[95%] flex items-center rounded-3xl border-[1px] border-gray-500 addBorder min-h-[40px]">
                    <input
                      type="text"
                      name="phone_number"
                      className="h-[85%] w-[90%] ml-4 outline-none baseColor placeHolder"
                      placeholder="Phone Number"
                      value={values.phone_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.phone_number && touched.phone_number ? (
                    <>
                      <p className="min-h-[40px] w-full pl-5 theamColor addFont text-[15px] truncate">
                        {errors.phone_number}
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
                <div className="h-[15%] w-full centerDiv min-h-[40px]">
                  <FcGoogle className="text-[35px] mr-4 cursor-pointer" />
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
            </>
          )}
        </form>
      </div>
    </>
  );
};
