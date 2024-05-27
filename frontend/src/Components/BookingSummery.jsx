import propTypes from "prop-types";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CirculareSpinner from "../utils/CirculareSpinner";
export const BookingSummery = ({ bookingDetails, roomType }) => {
  const getMonthName = (monthNumber) => {
    const date = new Date(2000, monthNumber - 1);
    return date.toLocaleString("en-US", { month: "long" });
  };
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
      <div ref={printDocument} className="h-auto w-auto flex flex-col gap-4">
        <div className="h-auto w-[85%] min-h-[64px] mb-[1px] flex centerDiv addFont text-[1.2rem]">
          Booking Details
        </div>
        <div className="min-h-[45px] h-auto w-full flex">
          <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
            Booking ID :
          </div>
          <div className="h-full w-[60%] flex flex-row items-center pl-3">
            {bookingDetails.bookingId}
          </div>
        </div>
        <div className="min-h-[45px] h-auto w-full flex">
          <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
            Full Name :
          </div>
          <div className="h-full w-[60%] flex flex-row items-center pl-3">
            {bookingDetails.name}
          </div>
        </div>
        <div className="min-h-[45px] h-auto w-full flex">
          <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
            Email :
          </div>
          <div className="h-full w-[60%] flex flex-row items-center pl-3">
            {bookingDetails.email}
          </div>
        </div>
        <div className="min-h-[45px] h-auto w-full flex">
          <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
            Phone Number :
          </div>
          <div className="h-full w-[60%] flex flex-row items-center pl-3">
            {bookingDetails.phoneNumber}
          </div>
        </div>
        <div className="min-h-[45px] h-auto w-full flex">
          <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
            Additional Info :
          </div>
          <div className="h-full w-[60%] flex flex-row items-center pl-3">
            {bookingDetails.additionalContactInformation}
          </div>
        </div>
        <div className="min-h-[45px] h-auto w-full flex">
          <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
            Hotel Name
          </div>
          <div className="h-full w-[60%] flex flex-row items-center pl-3">
            {bookingDetails.hotelName}
          </div>
        </div>
        <div className="min-h-[45px] h-auto w-full flex">
          <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
            Date
          </div>
          <div className="h-full w-[60%] flex flex-row items-center pl-3">
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
        <div className="min-h-[45px] h-auto w-full flex">
          <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
            Room Package
          </div>
          <div className="h-full w-[60%] flex flex-row items-center pl-3">
            {roomType}
          </div>
        </div>
        <div className="min-h-[45px] h-auto w-full flex">
          <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
            Payment Method
          </div>
          <div className="h-full w-[60%] flex flex-row items-center pl-3">
            {bookingDetails.paymentMethod}
          </div>
        </div>
        <div className="min-h-[45px] h-auto w-full flex">
          <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
            Amount :
          </div>
          <div className="h-full w-[60%] flex flex-row items-center pl-3">
            {bookingDetails.totalAmount}
          </div>
        </div>
        <div
          ref={hideThisPart}
          className="min-h-[45px] h-auto w-full flex flex-row gap-3"
        >
          <button className=" w-[45%] h-[60px] rounded-lg  text-black border-[1px] border-[#003b95] shadow-md">
            Explore More
          </button>
          <button
            onClick={handleDownloadPdf}
            className=" w-[45%] h-[60px] rounded-lg  text-black border-[1px] border-[#003b95] shadow-md"
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
