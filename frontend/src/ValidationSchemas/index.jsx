import * as yup from "yup";
export const signInUpSchema = yup.object({
  name: yup.string().min(2).max(30).required("Please enter your full name"),
  email: yup.string().email().required("Please enter valid email address"),
  password: yup.string().min(5).required("Please enter your password"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match"),
  phone_number: yup
    .number()
    .min(10)
    .required("Please enter valid mobile number"),
});
