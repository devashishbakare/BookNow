export const baseUrl = "http://localhost:8000";

export const createHeader = (token) => {
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

export const sampleDates = {
  selectedDates: [
    {
      month: 4, // April
      dates: [5, 10, 15, 20, 25], // Selected dates in April
    },
    {
      month: 5, // May
      dates: [2, 7, 12, 17, 22, 27], // Selected dates in May
    },
  ],
};
