import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Calendar } from "./Calendar";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { MdCurrencyRupee } from "react-icons/md";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { useFormik } from "formik";
import Spinners from "../utils/Spinners";
import { HotelBookingFormSchema } from "../ValidationSchemas/hotelBookingFormSchema";
import {
  getHotelDetails,
  confirmBooking,
  razorpayCreateOrder,
  varifyBooking,
} from "../utils/api";
import {
  showErrorNotification,
  showSuccessNotification,
  showWarningNotification,
} from "../utils/notification";
import { ToastContainer } from "react-toastify";
export const ConfirmBooking = () => {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [totalAmount, setTotalAmount] = useState(0);
  const [packageDropDownBox, setPackageDropDownBox] = useState(false);
  const [paymentSelection, setPaymentSelection] = useState(false);
  const [userMonthDateSelection, setUserMonthDateSelection] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hotelDetails, setHotelDetails] = useState();
  const [toggleCollection, setToggleCollection] = useState();
  const date = new Date();
  const dates = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
  let monthName = new Date(dates.year, dates.month - 1).toLocaleString(
    "default",
    {
      month: "long",
    }
  );
  const [calanderDetails, setCalendarDetails] = useState({
    month: dates.month,
    monthName,
  });

  useEffect(() => {
    const fetchedHotelData = async (id) => {
      const response = await getHotelDetails(id);
      if (response.success === true) {
        const packageSelectionData = {
          selectedPackageIndex: -1,
          packageOption: new Array(response.data.roomPackages.length).fill(
            false
          ),
        };
        setToggleCollection(packageSelectionData);
        setHotelDetails(response.data);
        setIsLoading(false);
      } else {
        showErrorNotification("something went wrong, please try again later");
        navigate("/");
      }
    };
    fetchedHotelData(hotelId);
  }, [hotelId, navigate]);

  const formInitialValue = {
    name: "",
    email: "",
    phone_number: "",
    additional_contact_information: "",
  };
  const { handleSubmit, handleBlur, handleChange, touched, errors, values } =
    useFormik({
      initialValues: {
        ...formInitialValue,
        formType: "Hotel_Booking_Form",
      },
      validationSchema: HotelBookingFormSchema,
      onSubmit: async (values, action) => {
        if (localStorage.getItem("token") == null) {
          const currentPath = location.pathname;
          navigate("/signIn", { state: currentPath });
        } else if (totalAmount == 0) {
          showErrorNotification("Date and Package Required");
        } else {
          let selectedPayment = paymentSelection == false ? 0 : 1;
          let dataforDateSelection = getDateSection(userMonthDateSelection);
          console.log(dataforDateSelection);
          const userCollecetedData = {
            name: values.name,
            email: values.email,
            phone_number: values.phone_number,
            additional_contact_information:
              values.additional_contact_information,
            hotelId: hotelDetails._id,
            hotelName: hotelDetails.name,
            dataforDateSelection,
            userPackageSelection_id:
              hotelDetails.roomPackages[toggleCollection.selectedPackageIndex]
                ._id,
            paymentSelectionType: selectedPayment,
            totalAmount,
          };
          const token = localStorage.getItem("token");

          if (paymentSelection == false) {
            const response = await confirmBooking(token, userCollecetedData);
            if (response.success == true) {
              showSuccessNotification("Your booking is confirmed");
              const sharedDate = {
                data: response.data,
                selectedPackage:
                  hotelDetails.roomPackages[
                    toggleCollection.selectedPackageIndex
                  ].roomType,
              };
              navigate("/bookingConfirmation", { state: sharedDate });
            } else {
              console.log("request faild " + response.error);
              showErrorNotification(
                "Un-Authorized request, please login and try again"
              );
            }
          } else {
            const selectedPackageData = {
              amount: totalAmount,
              roomPackageId:
                hotelDetails.roomPackages[toggleCollection.selectedPackageIndex]
                  ._id,
            };
            setIsLoading(true);
            const response = await razorpayCreateOrder(
              token,
              selectedPackageData
            );
            if (response.success == true) {
              console.log("booking has been created");
              handleOpenRazorpay(response.data, userCollecetedData);
            } else {
              showErrorNotification(response.error);
            }
            setIsLoading(false);
          }
          setPackageDropDownBox(false);
          setUserMonthDateSelection({});
          setTotalAmount(0);
          const packageSelectionData = {
            selectedPackageIndex: -1,
            packageOption: new Array(hotelDetails.roomPackages.length).fill(
              false
            ),
          };
          setToggleCollection(packageSelectionData);
          action.resetForm();
        }
      },
    });

  const handleOpenRazorpay = (createdBookingDetails, userCollecetedData) => {
    console.log("handle razer pay open");
    console.log(createdBookingDetails);
    var options = {
      key: import.meta.env.REZ_KEY,
      amount: Number(createdBookingDetails.amount),
      currency: createdBookingDetails.currency,
      name: "BookNow",
      description: "Test Transaction",
      image:
        "http://res.cloudinary.com/djgouef8q/image/upload/v1707109963/p8lfmwymj1fnxoddeaaa.png",
      order_id: createdBookingDetails.id,
      handler: async function (response) {
        const data = {
          booking_id: createdBookingDetails.id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          razorpay_payment_id: response.razorpay_payment_id,
        };
        const responseForVarification = await varifyBooking(data);
        if (responseForVarification.success === true) {
          confirmBookingWithPaymentGateway(userCollecetedData);
        }
      },
      prefill: {},
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp = new window.Razorpay(options);
    rzp.open();
  };

  const confirmBookingWithPaymentGateway = async (userCollecetedData) => {
    const token = localStorage.getItem("token");
    const response = await confirmBooking(token, userCollecetedData);
    if (response.success == true) {
      showSuccessNotification("Your booking is confirmed");
      const sharedDate = {
        data: response.data,
        selectedPackage:
          hotelDetails.roomPackages[toggleCollection.selectedPackageIndex]
            .roomType,
      };
      navigate("/bookingConfirmation", { state: sharedDate });
    } else {
      showErrorNotification(
        "Un-Authorized request, please login and try again"
      );
    }
  };
  const getDateSection = () => {
    let storeResult = [];
    for (let key in userMonthDateSelection) {
      let storeCurrentMonth = key;
      let storeCurrentSelectedDate = [];
      userMonthDateSelection[key].forEach((element) =>
        storeCurrentSelectedDate.push(element)
      );
      storeResult.push({
        month: storeCurrentMonth,
        dates: storeCurrentSelectedDate,
      });
    }
    return storeResult;
  };

  const updateMonth = (requestFor) => {
    if (requestFor == "next") {
      let updatedDetails = { ...calanderDetails };
      updatedDetails.month = updatedDetails.month + 1;
      updatedDetails.monthName = new Date(
        dates.year,
        updatedDetails.month - 1
      ).toLocaleString("default", {
        month: "long",
      });
      setCalendarDetails(updatedDetails);
    } else {
      let updatedDetails = { ...calanderDetails };
      updatedDetails.month = updatedDetails.month - 1;
      updatedDetails.monthName = new Date(
        dates.year,
        updatedDetails.month - 1
      ).toLocaleString("default", {
        month: "long",
      });
      setCalendarDetails(updatedDetails);
    }
  };

  const updateToggleSelection = async (index) => {
    if (Object.keys(userMonthDateSelection).length == 0) {
      showWarningNotification("Please select Date first");
      return;
    }
    const totalDaysSelected = await getDateSelectionCount();
    const updatedPackageOption = new Array(
      toggleCollection.packageOption.length
    ).fill(false);
    updatedPackageOption[index] = true;
    const packageSelectionData = {
      selectedPackageIndex: index,
      packageOption: updatedPackageOption,
    };
    let packageSelectionPrice =
      hotelDetails.roomPackages[packageSelectionData.selectedPackageIndex]
        .price;
    setTotalAmount(packageSelectionPrice * totalDaysSelected);
    setToggleCollection(packageSelectionData);
  };

  const updateAmountFromCalendarSelection = (numberOfDays) => {
    if (toggleCollection.selectedPackageIndex == -1) return;
    let packageSelectionPrice =
      hotelDetails.roomPackages[toggleCollection.selectedPackageIndex].price;
    setTotalAmount(packageSelectionPrice * numberOfDays);
  };

  const getDateSelectionCount = () => {
    let selecteDateCount = 0;
    for (let month in userMonthDateSelection) {
      selecteDateCount += userMonthDateSelection[month].size;
    }
    return selecteDateCount;
  };

  return (
    <>
      {isLoading ? (
        <Spinners />
      ) : (
        <div className="h-[100vh] w-[100vw] flex flex-col centerDiv bg-[#f4f4f4]">
          <div className="h-[8vh] w-full max-w-[1150px]">
            <Navbar />
          </div>
          <div className="h-[92vh] w-full shadow-xl max-w-[1150px] flex flex-col sm:flex-row">
            <div className="h-auto w-full flex flex-col sm:h-full sm:w-[45%] sm:justify-between md:w-[40%]">
              <div className="h-auto w-full flex flex-col">
                <div className="h-auto mt-5 w-full flex items-center pl-2 mb-2 capitalize addFont">
                  <IoArrowBack className="text-[1.3rem] mr-2" />
                  back to hotel details
                </div>
                <div className="capitalize text-[1.2rem] p-2 ml-2 addFont text-[#003b95]">
                  Confirm your ideal hotel with <br />
                  BookNow
                </div>
                <div className="h-auto mt-2 w-full flex items-center pl-4 font-light">
                  Elevate your travel experience with bookNow, stay with
                  confidence and ease. we offer you your perfect escape!
                </div>
              </div>
              <div className="hidden sm:h-[300px] sm:w-full sm:flex sm:items-center sm:justify-center">
                <div className="h-[95%] w-[90%] rounded-lg bg-[hsl(225,100%,94%)] flex flex-col gap-2 centerDiv p-3 shadow-xl">
                  <div className="h-auto w-full flex items-center ml-1 addFont text-[#003b95]">
                    Booking Information
                  </div>
                  <div className="h-auto w-full flex items-center ml-1 font-extralight">
                    Room reservations are available starting at 10:00 AM and
                    must be vacated by 10:00 AM the following day. Late
                    check-out may incur additional charges. Terms and conditions
                    apply. By booking, you agree to abide by the hotels policies
                    and regulations
                  </div>
                  <div className="h-auto w-full flex items-center ml-1 text-[#4343f1] underline">
                    contact us <IoArrowForward className="ml-2 text-black" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-auto flex justify-center bg-[#fffdfd] shadow-lg sm:h-full sm:w-[55%] sm:overflow-y-scroll md:w-[60%] ">
              <div className="h-auto w-[95%] flex flex-col items-center gap-3">
                <div className="h-[60px] w-full flex items-center capitalize text-[1.2rem] addFont mt-4">
                  Booking Confirmation Details
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="h-auto w-full flex flex-col gap-4"
                >
                  <div className="h-auto w-full flex flex-col gap-1">
                    <span className="h-[40px] w-full flex items-center ml-2 addFont">
                      Full Name
                    </span>
                    <div className="h-[50px] w-[90%] ml-1 centerDiv rounded-lg border-[1px] border-gray-500">
                      <input
                        type="text"
                        name="name"
                        className="h-[90%] w-[95%] outline-none bg-[#fffdfd]"
                        placeholder=""
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {touched.name && errors.name && (
                      <>
                        <p className="h-auto w-[90%] p-2 theamColor addFont text-[15px] whitespace-nowrap">
                          {errors.name}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="h-auto w-full flex flex-col gap-1">
                    <span className="h-[40px] w-full flex items-center ml-2 addFont">
                      Email
                    </span>
                    <div className="h-[50px] w-[90%] ml-1 centerDiv rounded-lg border-[1px] border-gray-500">
                      <input
                        type="email"
                        name="email"
                        className="h-[90%] w-[95%] outline-none bg-[#fffdfd]"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {touched.email && errors.email && (
                      <>
                        <p className="h-auto w-[90%] p-2 theamColor addFont text-[15px] whitespace-nowrap">
                          {errors.email}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="h-auto w-full flex flex-col gap-1">
                    <span className="h-[40px] w-full flex items-center ml-2 addFont">
                      Phone Number
                    </span>
                    <div className="h-[50px] w-[90%] ml-1 centerDiv rounded-lg border-[1px] border-gray-500">
                      <input
                        type="number"
                        name="phone_number"
                        className="h-[90%] w-[95%] outline-none bg-[#fffdfd]"
                        value={values.phone_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {touched.phone_number && errors.phone_number && (
                      <>
                        <p className="h-auto w-[90%] p-2 theamColor addFont text-[15px] whitespace-nowrap">
                          {errors.phone_number}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="h-auto w-full flex flex-col gap-1">
                    <span className="h-[40px] w-full flex items-center ml-2 addFont">
                      Additional Contact Information
                    </span>
                    <div className="h-auto w-[90%] ml-1 centerDiv rounded-lg border-[1px] border-gray-300">
                      <textarea
                        name="additional_contact_information"
                        rows="4"
                        cols="45"
                        className=" w-full rounded-lg pl-2 pt-3 pr-2 border-[1px] border-gray-500 outline-none overflow-x-hidden bg-[#fffdfd]"
                        value={values.additional_contact_information}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className="h-auto w-full flex flex-col gap-1">
                    <span className="h-[40px] w-full flex items-center ml-2 addFont">
                      Select Dates
                    </span>
                    <div className="h-auto w-[330px] border-2 border-gray-400">
                      <div className="h-auto w-full flex flex-col border-b-2 border-gray-400 sm:w-[320px]">
                        <div className="h-[70px] w-full flex ml-3 centerDiv">
                          {dates.month != calanderDetails.month && (
                            <span
                              onClick={() => updateMonth("prev")}
                              className="h-[40px] w-[40px] centerDiv addBorder rounded-[50%]"
                            >
                              <SlArrowLeft className="text-[1.4rem]" />
                            </span>
                          )}
                          <span className="h-full w-[60%] centerDiv addFont text-[20px] ml-4 mr-2">
                            {calanderDetails.monthName} {dates.year}
                          </span>
                          {calanderDetails.month != 12 && (
                            <span
                              onClick={() => updateMonth("next")}
                              className="h-[40px] w-[40px] centerDiv addBorder rounded-[50%]"
                            >
                              <SlArrowRight className="text-[1.4rem]" />
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="h-auto w-[90%] p-3 sm:w-[320px]">
                        <Calendar
                          year={dates.year}
                          month={calanderDetails.month}
                          currentMonth={dates.month}
                          day={dates.day}
                          selectedDates={hotelDetails.selectedDates}
                          userMonthDateSelection={userMonthDateSelection}
                          setUserMonthDateSelection={setUserMonthDateSelection}
                          updateAmount={updateAmountFromCalendarSelection}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-auto w-[90%] flex flex-col gap-1 mt-2 centerDiv">
                    <div
                      onClick={() => setPackageDropDownBox(!packageDropDownBox)}
                      className="h-[60px] w-full border-2 border-gray-400 flex rounded-lg"
                    >
                      <span className="h-full w-[80%] addFont flex items-center pl-2">
                        Select Room Package
                      </span>
                      <span className="h-full w-[20%] centerDiv">
                        {packageDropDownBox ? (
                          <FaSortUp className="text-[1.5rem]" />
                        ) : (
                          <FaSortDown className="text-[1.5rem]" />
                        )}
                      </span>
                    </div>
                    {packageDropDownBox && (
                      <>
                        <div className="h-auto w-full flex flex-col gap-5">
                          {hotelDetails &&
                            hotelDetails.roomPackages.map(
                              (roomPackage, index) => (
                                <>
                                  <div
                                    key={roomPackage._id}
                                    className="h-auto w-full border-2 border-gray-300"
                                  >
                                    <div className="h-[60px] w-full flex bg-[#efeeee] shadow-sm">
                                      <span className="h-full w-[70%] addFont flex items-center pl-4">
                                        {roomPackage.roomType}
                                      </span>
                                      <span className="h-full w-[30%] mr-3 centerDiv">
                                        <span className="h-[30px] w-[60px] border-2 border-gray-600 flex rounded-[30px] items-center">
                                          <span
                                            onClick={() =>
                                              updateToggleSelection(index)
                                            }
                                            className="h-full w-[50%] flex items-center"
                                          >
                                            {toggleCollection.selectedPackageIndex !=
                                              index && (
                                              <span className="h-[25px] w-[25px] rounded-[50%] bg-[#f04a4a]"></span>
                                            )}
                                          </span>
                                          <span
                                            onClick={() =>
                                              updateToggleSelection(index)
                                            }
                                            className="h-full w-[50%] flex flex-row-reverse items-center"
                                          >
                                            {toggleCollection.selectedPackageIndex ==
                                              index && (
                                              <span className="h-[25px] w-[25px] rounded-[50%] bg-[#3b973b]"></span>
                                            )}
                                          </span>
                                        </span>
                                      </span>
                                    </div>

                                    <div className="h-auto w-full flex flex-col items-center">
                                      <div className="h-[40px] w-[95%] flex items-center pl-3 border-b-[1px] border-black">
                                        <span className="h-full w-[60%] flex items-center">
                                          No Of People Alllowed
                                        </span>
                                        <span className="h-full w-[40%] centerDiv">
                                          {roomPackage.numberOfPeopleAllowed}
                                        </span>
                                      </div>
                                      <div className="h-[40px] w-[95%] flex items-center pl-3 border-b-[1px] border-black">
                                        <span className="h-full w-[60%] flex items-center">
                                          Number Of Beds
                                        </span>
                                        <span className="h-full w-[40%] centerDiv">
                                          {roomPackage.numberOfBeds}
                                        </span>
                                      </div>
                                      <div className="h-[40px] w-[95%] flex items-center pl-3 border-b-[1px] border-black">
                                        <span className="h-full w-[60%] flex items-center">
                                          Number Of Bathrooms
                                        </span>
                                        <span className="h-full w-[40%] centerDiv">
                                          {roomPackage.numberOfBathrooms}
                                        </span>
                                      </div>
                                      <div className="h-[40px] w-[95%] flex items-center pl-3 border-b-[1px] border-black">
                                        <span className="h-full w-[60%] flex items-center">
                                          Meals Included
                                        </span>
                                        <span className="h-full w-[40%] centerDiv">
                                          {roomPackage.mealsIncluded
                                            ? "Yes"
                                            : "No"}
                                        </span>
                                      </div>
                                      <div className="h-[40px] w-[95%] flex items-center pl-3">
                                        <span className="h-full w-[60%] flex items-center">
                                          Price
                                        </span>
                                        <span className="h-full w-[40%] centerDiv">
                                          {roomPackage.price}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )
                            )}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="h-auto w-[90%] flex justify-between gap-3 mb-[10px] mt-[10px]">
                    <div className="h-[60px] w-[150px] flex items-center pl-2 addFont">
                      Total Amount
                    </div>
                    <div className="h-[60px] w-[70%] centerDiv gap-1">
                      <span className="addFont text-[1.2rem]">
                        {totalAmount}
                      </span>
                      <MdCurrencyRupee className="text-[1.2rem] font-bold" />
                    </div>
                  </div>

                  <div className="h-auto w-full flex flex-col gap-3 mb-[30px]">
                    <span className="h-[40px] w-full flex items-center ml-2 addFont">
                      Confirmed Your Booking
                    </span>
                    <div className="h-[80px] w-[90%] flex items-center gap-2">
                      <span
                        onClick={() => setPaymentSelection(false)}
                        className={`h-[70%] w-[45%] centerDiv capitalize rounded-lg ml-2 text-[1.03rem] ${
                          paymentSelection == false
                            ? "border-2 border-blue-800"
                            : "border-2 border-gray-500"
                        }`}
                      >
                        pay on arrival
                      </span>

                      <span
                        onClick={() => setPaymentSelection(true)}
                        className={`h-[70%] w-[45%] centerDiv capitalize rounded-lg  ${
                          paymentSelection == true
                            ? "border-2 border-blue-800"
                            : "border-2 border-gray-500"
                        }`}
                      >
                        online payment
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="h-[50px] w-[90%] text-white rounded-lg bg-[#003b95]"
                    >
                      BookNow
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
};
