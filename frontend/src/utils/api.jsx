import axios from "axios";
import { baseUrl } from "./constants";

const signIn = async (signInData) => {
  try {
    const response = await axios.post(`${baseUrl}/signIn`, signInData);
    const { data } = response.data;
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};

const signUp = async (signUpData) => {
  try {
    const response = await axios.post(`${baseUrl}/signUp`, signUpData);
    const { data } = response.data;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};

export default {
  signIn,
  signUp,
};
