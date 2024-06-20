import axios from "axios";
import { baseUrl, createHeader } from "./constants";

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

export const confirmBooking = async (token, bookingInformation) => {
  try {
    const headers = createHeader(token);
    const response = await axios.post(
      `${baseUrl}/hotel/confirmBooking`,
      bookingInformation,
      { headers }
    );
    const { data } = response.data;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};

export const razorpayCreateOrder = async (token, bookingInfo) => {
  try {
    const headers = createHeader(token);
    const response = await axios.post(
      `${baseUrl}/payment/createBooking`,
      bookingInfo,
      { headers }
    );

    const { data } = response.data;
    console.log(data + " this is from API");
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};

export const varifyBooking = async (bookingInfo) => {
  try {
    const response = await axios.post(`${baseUrl}/payment/verify`, bookingInfo);
    const { message } = response.data;
    return { success: true, message };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};

export const fetchUserDetails = async (token) => {
  try {
    const headers = createHeader(token);
    const response = await axios.get(`${baseUrl}/user/userDetails`, {
      headers,
    });
    const { data } = response.data;
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};

export const fetchCurrentBooking = async (token) => {
  try {
    const headers = createHeader(token);
    const response = await axios.get(`${baseUrl}/user/currentBooking`, {
      headers,
    });
    const { data } = response.data;
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};

export const fetchHistory = async (token) => {
  try {
    const headers = createHeader(token);
    const response = await axios.get(`${baseUrl}/user/history`, {
      headers,
    });
    const { data } = response.data;
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};

export const createReview = async (token, reviewInfo) => {
  try {
    const headers = createHeader(token);
    const response = await axios.post(`${baseUrl}/review/add`, reviewInfo, {
      headers,
    });
    const { data } = response.data;
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};

export const editReview = async (token, reviewInfo) => {
  try {
    const headers = createHeader(token);
    const response = await axios.put(`${baseUrl}/review/edit`, reviewInfo, {
      headers,
    });
    const { data } = response.data;
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};

export const fetchUserReviews = async (token) => {
  try {
    const headers = createHeader(token);
    const response = await axios.get(`${baseUrl}/review/fetch`, {
      headers,
    });
    const { data } = response.data;
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};

export const deleteUserReview = async (token, reviewId) => {
  try {
    const headers = createHeader(token);
    const response = await axios.delete(
      `${baseUrl}/review/delete/${reviewId}`,
      { headers }
    );
    const { data } = response.data;
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error.response.data.error };
  }
};
