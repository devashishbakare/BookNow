import React, { useEffect } from "react";
import { useState } from "react";
export const Calendar = ({ year, month, availableDates }) => {
  // calculate day in month
  const daysInMonth = new Date(year, month, 0).getDate();

  // calander status update
  const [dateSelectionStatus, setDateSelectionStatus] = useState(
    new Array(daysInMonth + 1).fill(0)
  );

  // filling available status to set
  let checkDates = new Set();
  for (let dayInDate of availableDates) {
    checkDates.add(dayInDate);
  }

  // checking avaible status in O(N) times
  const isDateHighlighted = (day) => {
    return checkDates.has(day);
  };

  // update the date selection by user
  const dateSelection = (selectedDate) => {
    setDateSelectionStatus((prevDateSelectionStatus) => {
      const updatedDateSelectionStatus = [...prevDateSelectionStatus];
      updatedDateSelectionStatus[selectedDate] =
        updatedDateSelectionStatus[selectedDate] === 1 ? 0 : 1;

      return updatedDateSelectionStatus;
    });
  };

  // creating dates row-wise
  let storeDate = [];
  for (let i = 0; i < 5; i++) {
    storeDate[i] = [];
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 1; j <= 7; j++) {
      storeDate[i][j - 1] = 7 * i + j;
    }
  }
  let ind = 0;
  for (let i = 29; i <= daysInMonth; i++) {
    storeDate[storeDate.length - 1][ind++] = i;
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
        <div className="h-auto w-auto flex flex-col gap-2">
          {storeDate.map((dateMap) => (
            <div className="flex flex-row gap-2" key={dateMap[0] + "month"}>
              {dateMap.map((date) => (
                <div
                  className={`h-[35px] w-[35px] border-2 border-gray-300 rounded-[50%] centerDiv ${
                    isDateHighlighted(date)
                      ? `text-red-500 cursor-pointer`
                      : `pointer-events-none`
                  }
                      ${
                        dateSelectionStatus[date] === 1
                          ? "calendarSelection"
                          : ""
                      }
                      `}
                  onClick={() => dateSelection(date)}
                  key={date}
                >
                  {date}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
