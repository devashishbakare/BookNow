//export const baseUrl = "http://localhost:8000";
export const baseUrl =
  "http://booknowbackend-env.eba-hh3mrvkm.ap-south-1.elasticbeanstalk.com";

export const createHeader = (token) => {
  return {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

export const sampleDates = {
  selectedDates: [
    {
      month: 4, // April
      dates: [5, 10, 15, 20, 25],
    },
    {
      month: 5, // May
      dates: [2, 7, 12, 17, 22, 27],
    },
  ],
};

export const sampleRoomPackage = [
  {
    _id: "661e08da50e4a5aeee946958",
    roomType: "Standard",
    numberOfPeopleAllowed: 2,
    numberOfBeds: 1,
    numberOfBathrooms: 1,
    mealsIncluded: false,
    price: 2999,
    __v: 0,
  },
  {
    _id: "661e08da50e4a5aeee946959",
    roomType: "Deluxe",
    numberOfPeopleAllowed: 4,
    numberOfBeds: 2,
    numberOfBathrooms: 2,
    mealsIncluded: true,
    price: 6999,
    __v: 0,
  },
  {
    _id: "661e08da50e4a5aeee94695a",
    roomType: "Suite",
    numberOfPeopleAllowed: 6,
    numberOfBeds: 3,
    numberOfBathrooms: 3,
    mealsIncluded: true,
    price: 9999,
    __v: 0,
  },
];
export const map =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.439572042338!2d73.89993439678955!3d18.554211000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c116f67257dd%3A0x3cfb9881ad224c0!2sHyatt%20Pune!5e0!3m2!1sen!2sin!4v1696000702562!5m2!1sen!2sin";
