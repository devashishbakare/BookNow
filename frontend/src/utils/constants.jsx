const baseUrl = "http://localhost:8000";

const createHeader = (token) => {
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

export default {
  baseUrl,
  createHeader,
};
