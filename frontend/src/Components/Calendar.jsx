import propTypes from "prop-types";
import { useState } from "react";
export const Calendar = ({
  year,
  month,
  selectedDates,
  updateUserDateSelection,
}) => {
  const [userSelectedDates, setUserSelectedDates] = useState(new Set());
  let totalDayInMonth = new Date(year, month, 0).getDate();
  let selectedDateMapper = new Array(totalDayInMonth + 1).fill(0);
  selectedDates.selectedDates.forEach((monthData) => {
    if (monthData.month == month) {
      monthData.dates.forEach(
        (selectedDaysInMonth) => (selectedDateMapper[selectedDaysInMonth] = 1)
      );
    }
  });
  //console.log(selectedDateMapper);
  let weekInMonth = [];
  let day = 1;
  let week = [];
  while (day <= totalDayInMonth) {
    if (day % 7 != 0) {
      week.push(day);
    } else {
      week.push(day);
      weekInMonth.push(week);
      week = [];
    }
    day++;
  }
  if (week.length > 0) weekInMonth.push(week);

  const updateUserSelection = (day) => {
    console.log(day + " day ");
    if (selectedDateMapper[day] == 0) {
      if (userSelectedDates.has(day)) {
        updateUserDateSelection(day);
        setUserSelectedDates((prevSelection) =>
          new Set(prevSelection).delete(day)
        );
      } else {
        updateUserDateSelection(day);
        setUserSelectedDates((prevSelection) =>
          new Set(prevSelection).add(day)
        );
      }
    }
  };

  return (
    <>
      <div className="flex flex-col h-full w-[300px] gap-2">
        {weekInMonth &&
          weekInMonth.map((dayInWeek, weekIndex) => (
            <>
              <div key={`week-${weekIndex}-${month}`} className="flex gap-2">
                {dayInWeek.map((day, dayIndex) => (
                  <>
                    <span
                      key={`${day}-${dayIndex}-${month}`}
                      onClick={() => updateUserSelection(day)}
                      className={`h-[35px] w-[35px] rounded-[50%] addBorder centerDiv ${
                        selectedDateMapper[day] == 1
                          ? `text-[red] cursor-none`
                          : `text-[green] cursor-pointer`
                      }
                       ${
                         userSelectedDates.has(day)
                           ? "bg-[black] text-[white]"
                           : ""
                       }
                      `}
                    >
                      {day}
                    </span>
                  </>
                ))}
              </div>
            </>
          ))}
      </div>
    </>
  );
};

Calendar.propTypes = {
  year: propTypes.number.isRequired,
  month: propTypes.number.isRequired,
  selectedDates: propTypes.object,
  updateUserDateSelection: propTypes.func,
};
