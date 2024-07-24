import React from "react";
import propTypes from "prop-types";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CirculareSpinner from "../utils/CirculareSpinner";
import { useNavigate } from "react-router-dom";
export const BookingSummery = ({ bookingDetails, roomType }) => {
  const getMonthName = (monthNumber) => {
    const date = new Date(2000, monthNumber - 1);
    return date.toLocaleString("en-US", { month: "long" });
  };
  const navigate = useNavigate();
  const [pdfClicked, setPdfClicked] = useState(false);
  const printDocument = useRef();
  const hideThisPart = useRef();
  const saveStyle = useRef();
  const handleDownloadPdf = async () => {
    setPdfClicked(true);
    // Hide the specific div
    if (hideThisPart.current) {
      saveStyle.current = hideThisPart.current.style.display;
      hideThisPart.current.style.display = "none";
    }

    const element = printDocument.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("booking_details.pdf");

    // Restore the specific div
    if (hideThisPart.current) {
      hideThisPart.current.style.display = saveStyle.current;
    }
    setPdfClicked(false);
  };
  return (
    <>
      <div
        ref={printDocument}
        className="h-auto w-auto flex flex-col gap-1 centerDiv"
      >
        <div className="h-auto w-[85%] min-h-[64px] mb-[1px] flex centerDiv addFont text-[1.2rem]">
          Booking Details
        </div>
        <div className="h-[50px] w-full flex centerDiv">
          <div className="h-full w-[50%] text-[#003b95] flex flex-row-reverse">
            <span className="h-full w-[150px] flex items-center">
              {" "}
              Booking ID :
            </span>
          </div>
          <div className="h-full w-[50%] flex flex-row items-center">
            {bookingDetails.bookingId}
          </div>
        </div>
        {/*  */}
        <div className="h-[50px] w-full flex centerDiv">
          <div className="h-full w-[50%] text-[#003b95] flex flex-row-reverse">
            <span className="h-full w-[150px] flex items-center"> Name :</span>
          </div>
          <div className="h-full w-[50%] flex flex-row items-center">
            {bookingDetails.name}
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="h-[50px] w-full flex centerDiv">
          <div className="h-full w-[50%] text-[#003b95] flex flex-row-reverse">
            <span className="h-full w-[150px] flex items-center"> Email :</span>
          </div>
          <div className="h-full w-[50%] flex flex-row items-center">
            {bookingDetails.email}
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="h-[50px] w-full flex centerDiv">
          <div className="h-full w-[50%] text-[#003b95] flex flex-row-reverse">
            <span className="h-full w-[150px] flex items-center">
              {" "}
              Phone Number :
            </span>
          </div>
          <div className="h-full w-[50%] flex flex-row items-center">
            {bookingDetails.phoneNumber}
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="h-[50px] w-full flex centerDiv">
          <div className="h-full w-[50%] text-[#003b95] flex flex-row-reverse">
            <span className="h-full w-[150px] flex items-center">
              {" "}
              Additional Info :
            </span>
          </div>
          <div className="h-full w-[50%] flex flex-row items-center">
            {bookingDetails.additionalContactInformation}
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="h-[50px] w-full flex centerDiv">
          <div className="h-full w-[50%] text-[#003b95] flex flex-row-reverse">
            <span className="h-full w-[150px] flex items-center">
              {" "}
              Hotel Name :
            </span>
          </div>
          <div className="h-full w-[50%] flex flex-row items-center">
            {bookingDetails.hotelName}
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="h-[50px] w-full flex centerDiv">
          <div className="h-full w-[50%] text-[#003b95] flex flex-row-reverse">
            <span className="h-full w-[150px] flex items-center"> Date :</span>
          </div>
          <div className="h-full w-[50%] flex flex-row items-center">
            {bookingDetails.selectedDates.map((month) => (
              <>
                {month.dates.map((date) => (
                  <>
                    <span className="">{date}</span>
                  </>
                ))}
                &nbsp;
                <span className="">{getMonthName(month.month)}</span>
                {", "}
                &nbsp;
              </>
            ))}
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="h-[50px] w-full flex centerDiv">
          <div className="h-full w-[50%] text-[#003b95] flex flex-row-reverse">
            <span className="h-full w-[150px] flex items-center">
              {" "}
              Room Package :
            </span>
          </div>
          <div className="h-full w-[50%] flex flex-row items-center">
            {roomType}
          </div>
        </div>
        {/*  */}
        <div className="h-[50px] w-full flex centerDiv">
          <div className="h-full w-[50%] text-[#003b95] flex flex-row-reverse">
            <span className="h-full w-[150px] flex items-center">
              {" "}
              Payment Method :
            </span>
          </div>
          <div className="h-full w-[50%] flex flex-row items-center">
            {bookingDetails.paymentMethod}
          </div>
        </div>
        {/*  */}
        <div className="h-[50px] w-full flex centerDiv">
          <div className="h-full w-[50%] text-[#003b95] flex flex-row-reverse">
            <span className="h-full w-[150px] flex items-center">
              {" "}
              Amount :
            </span>
          </div>
          <div className="h-full w-[50%] flex flex-row items-center">
            {bookingDetails.totalAmount}
          </div>
        </div>
        {/*  */}
        <div className="h-[50px] w-full flex centerDiv">
          <div className="h-full w-[50%] text-[#003b95] flex flex-row-reverse">
            <span className="h-full w-[150px] flex items-center">
              {" "}
              Room Package :
            </span>
          </div>
          <div className="h-full w-[50%] flex flex-row items-center">
            {roomType}
          </div>
        </div>
        {/*  */}

        <div
          ref={hideThisPart}
          className="min-h-[45px] h-auto w-full flex flex-row centerDiv gap-3 md:w-[70%] mt-3"
        >
          <button
            onClick={() => navigate("/")}
            className=" w-[180px] h-[50px] rounded-lg  text-black border-[1px] border-[#003b95] shadow-md"
          >
            Explore More
          </button>
          <button
            onClick={handleDownloadPdf}
            className=" w-[180px] h-[50px] rounded-lg  text-black border-[1px] border-[#003b95] shadow-md"
          >
            {pdfClicked == false ? <>Generate PDF</> : <CirculareSpinner />}
          </button>
        </div>
      </div>
    </>
  );
};
BookingSummery.propTypes = {
  bookingDetails: propTypes.object,
  roomType: propTypes.string,
};
