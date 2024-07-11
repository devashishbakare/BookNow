import * as yup from "yup";
export const EditProfileSchema = yup.object({
  name: yup.string().min(2).max(30).required("Please enter your full name"),
  email: yup.string().email().required("Please enter valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[@$_!%*?&])(?=.*[0-9]).{8,}$/,
      "Password must contain at least one uppercase letter, one special character (@$_!%*?&) and one number, and must be at least 8 characters long"
    ),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match"),
  phone_number: yup
    .string()
    .required("Phone Number is required")
    .matches(/^[6-9]\d{9}$/, "Please enter a valid Indian phone number"),
});
