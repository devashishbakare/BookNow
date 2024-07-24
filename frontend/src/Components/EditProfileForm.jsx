import React from "react";
import { useState } from "react";
import propTypes from "prop-types";
import { GoEyeClosed, GoEye } from "react-icons/go";
import { useFormik } from "formik";
import { EditProfileSchema } from "../ValidationSchemas/EditProfileSchema";
import { editProfile } from "../utils/api";
import CirculareSpinner from "../utils/CirculareSpinner";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../utils/notification";

export const EditProfileForm = ({ handleUpdateUser }) => {
  const [showPasswordStatus, setShowPasswordStatus] = useState(false);
  const [localLoader, setLocalLoader] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
  };

  const editProfileFormik = useFormik({
    initialValues: { ...initialValues, formType: "editProfile" },
    validationSchema: EditProfileSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      setLocalLoader(true);
      const token = localStorage.getItem("token");
      const response = await editProfile(token, values);
      if (response.success) {
        const updatedToken = response.data.token;
        localStorage.setItem("token", updatedToken);
        handleUpdateUser(response.data.userDetails);
        showSuccessNotification("Proflie info has been updated successfully");
      } else {
        showErrorNotification("Something went wrong, try again later");
      }
      setLocalLoader(false);
      action.resetForm();
    },
  });
  return (
    <>
      <form
        onSubmit={editProfileFormik.handleSubmit}
        className="h-full w-full flex flex-col gap-3 ml-2 p-4"
      >
        {localLoader ? (
          <>
            <div className="h-full w-full centerDiv">
              <CirculareSpinner />
            </div>
          </>
        ) : (
          <>
            <div className="h-auto w-full flex flex-col gap-1">
              <span className="h-[40px] w-full flex items-center ml-2 addFont">
                Full Name
              </span>
              <div className="h-[50px] w-[90%] ml-1 centerDiv rounded-lg border-[1px] border-gray-500 ">
                <input
                  type="text"
                  name="name"
                  className="h-[90%] w-[95%] outline-none bg-[#f4f4f4]"
                  placeholder=""
                  value={editProfileFormik.values.name}
                  onChange={editProfileFormik.handleChange}
                  onBlur={editProfileFormik.handleBlur}
                />
              </div>
            </div>
            {editProfileFormik.errors.name && editProfileFormik.touched.name ? (
              <>
                <p className="h-auto w-full pl-5 theamColor addFont text-[15px] truncate">
                  {editProfileFormik.errors.name}
                </p>
              </>
            ) : null}
            <div className="h-auto w-full flex flex-col gap-1">
              <span className="h-[40px] w-full flex items-center ml-2 addFont">
                Email
              </span>
              <div className="h-[50px] w-[90%] ml-1 centerDiv rounded-lg border-[1px] border-gray-500">
                <input
                  type="email"
                  name="email"
                  className="h-[90%] w-[95%] outline-none bg-[#f4f4f4]"
                  placeholder=""
                  value={editProfileFormik.values.email}
                  onChange={editProfileFormik.handleChange}
                  onBlur={editProfileFormik.handleBlur}
                />
              </div>
            </div>
            {editProfileFormik.errors.email &&
            editProfileFormik.touched.email ? (
              <>
                <p className="h-auto w-full pl-5 theamColor addFont text-[15px] truncate">
                  {editProfileFormik.errors.email}
                </p>
              </>
            ) : null}
            <div className="h-auto w-full flex flex-col gap-1">
              <span className="h-[40px] w-full flex items-center ml-2 addFont">
                Phone Number
              </span>
              <div className="h-[50px] w-[90%] ml-1 centerDiv rounded-lg border-[1px] border-gray-500">
                <input
                  type="text"
                  name="phone_number"
                  className="h-[90%] w-[95%] outline-none bg-[#f4f4f4]"
                  placeholder=""
                  value={editProfileFormik.values.phone_number}
                  onChange={editProfileFormik.handleChange}
                  onBlur={editProfileFormik.handleBlur}
                />
              </div>
            </div>
            {editProfileFormik.errors.phone_number &&
            editProfileFormik.touched.phone_number ? (
              <>
                <p className="min-h-[40px] w-full pl-5 theamColor addFont text-[15px]">
                  {editProfileFormik.errors.phone_number}
                </p>
              </>
            ) : null}
            <div className="h-auto w-full flex flex-col gap-1">
              <span className="h-[40px] w-full flex items-center ml-2 addFont">
                Password
              </span>
              <div className="h-[50px] w-[90%] ml-1 flex items-center justify-evenly  rounded-lg border-[1px] border-gray-500">
                <input
                  type={showPasswordStatus ? "text" : "password"}
                  name="password"
                  className="h-[90%] w-[85%] outline-none pl-3 bg-[#f4f4f4]"
                  placeholder=""
                  value={editProfileFormik.values.password}
                  onChange={editProfileFormik.handleChange}
                  onBlur={editProfileFormik.handleBlur}
                />
                <div
                  onClick={() => setShowPasswordStatus(!showPasswordStatus)}
                  className="h-full w-[15%] centerDiv"
                >
                  {showPasswordStatus == false ? (
                    <GoEyeClosed className="text-[1.3rem]" />
                  ) : (
                    <GoEye className="text-[1.3rem]" />
                  )}
                </div>
              </div>
            </div>
            {editProfileFormik.errors.password &&
            editProfileFormik.touched.password ? (
              <>
                <p className="h-auto w-full pl-5 theamColor addFont text-[15px]">
                  {editProfileFormik.errors.password}
                </p>
              </>
            ) : null}
            <div className="h-auto w-full flex flex-col gap-1">
              <span className="h-[40px] w-full flex items-center ml-2 addFont">
                Confirm Password
              </span>
              <div className="h-[50px] w-[90%] ml-1 flex items-center justify-evenly  rounded-lg border-[1px] border-gray-500">
                <input
                  type={showPasswordStatus ? "text" : "password"}
                  name="confirm_password"
                  className="h-[90%] w-[85%] outline-none pl-3 bg-[#f4f4f4]"
                  placeholder=""
                  value={editProfileFormik.values.confirm_password}
                  onChange={editProfileFormik.handleChange}
                  onBlur={editProfileFormik.handleBlur}
                />
                <div
                  onClick={() => setShowPasswordStatus(!showPasswordStatus)}
                  className="h-full w-[15%] centerDiv"
                >
                  {showPasswordStatus == false ? (
                    <GoEyeClosed className="text-[1.3rem]" />
                  ) : (
                    <GoEye className="text-[1.3rem]" />
                  )}
                </div>
              </div>
            </div>
            {editProfileFormik.errors.confirm_password &&
            editProfileFormik.touched.confirm_password ? (
              <>
                <p className="h-auto w-full pl-5 theamColor addFont text-[15px] truncate">
                  {editProfileFormik.errors.confirm_password}
                </p>
              </>
            ) : null}
            <div className="h-[100px] w-[90%] centerDiv mt-5">
              <button
                type="submit"
                className="h-[55px] w-[200px] text-white bg-[#003b95] rounded-lg"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </>
  );
};

EditProfileForm.propTypes = {
  handleUpdateUser: propTypes.func.isRequired,
};
