import axios from "axios";
import { baseUrl } from "./constants";

export const signIn = async (signInData) => {
  try {
    const response = await axios.post(`${baseUrl}/signIn`, signInData);
    const { data } = response.data;
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};

export const signUp = async (signUpData) => {
  try {
    const response = await axios.post(`${baseUrl}/signUp`, signUpData);
    const { data } = response.data;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};

export const getHotelsFromCity = async (cityName) => {
  try {
    const response = await axios.get(`${baseUrl}/hotel/city/${cityName}`);
    const { data } = response.data;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};

export const getHotelDetails = async (hotelId) => {
  try {
    const response = await axios.get(`${baseUrl}/hotel?hotelId=${hotelId}`);
    const { data } = response.data;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};

export const getSearchResult = async (searchKey) => {
  try {
    const response = await axios.get(
      `${baseUrl}/hotel/search?key=${searchKey}`
    );
    const { data } = response.data;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};
