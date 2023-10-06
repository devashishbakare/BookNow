import React from "react";

export const Calendar = ({ year, month, availableDates }) => {
  console.log("here we come");
  console.log(year, month, availableDates);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const isDateHighlighted = (day) => {
    return availableDates.includes(day);
  };

  //set to add available dates
  let selectedDates = new Set();
  //todo : we have do something to highlight this is selected
  const getSelectedDate = (selectedDate) => {
    console.log("selected date " + selectedDate);
    if (selectedDate.has(selectedDate)) {
      selectedDates.add(selectedDate);
    } else {
      selectedDates.delete(selectedDate);
    }
  };

  const days = [...Array(daysInMonth).keys()];
  const numRows = Math.ceil(daysInMonth / 7);
  const calendar = [];

  for (let row = 0; row < numRows; row++) {
    const rowDays = days.slice(row * 7, (row + 1) * 7);

    calendar.push(
      <div key={row} className="flex gap-2">
        {rowDays.map((day) => (
          <div
            key={day}
            className={`h-[35px] w-[35px] border-2 border-gray-300 rounded-[50%] centerDiv ${
              isDateHighlighted(day + 1)
                ? `text-red-500`
                : `pointer-events-none`
            }`}
            onClick={() => getSelectedDate(day + 1)}
          >
            {day + 1}
          </div>
        ))}
      </div>
    );
  }
  return (
    <>
      <div className="h-full w-full centerDiv flex-col gap-5">
        <span className="">
          {new Date(year, month - 1).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <div className="flex flex-col gap-5">{calendar}</div>
      </div>
    </>
  );
};
