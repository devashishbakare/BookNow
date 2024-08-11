import * as yup from "yup";
export const SignInSchema = yup.object({
  email: yup.string().email().required("Please enter valid email address"),
  password: yup.string().min(8).required("Please enter your password"),
});
