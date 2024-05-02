import * as yup from "yup";
export const HotelBookingFormSchema = yup.object({
  name: yup.string().min(2).max(30).required("Please enter your full name"),
  email: yup.string().email().required("Please enter valid email address"),
  phone_number: yup
    .string()
    .required("Password is required")
    .matches(/^[6-9]\d{9}$/, "Please enter a valid Indian phone number"),
});
