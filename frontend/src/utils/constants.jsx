export const baseUrl = "http://localhost:8000";

export const createHeader = (token) => {
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};
