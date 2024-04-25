import propTypes from "prop-types";
import { useState } from "react";
export const Calendar = ({
  year,
  month,
  selectedDates,
  updateUserDateSelection,
}) => {
  const [monthDateSelectionMapper, setMonthDateSelectionMapper] = useState({});
  let totalDayInMonth = new Date(year, month, 0).getDate();
  let selectedDateMapper = new Array(totalDayInMonth + 1).fill(0);
  if (selectedDates.length > 0) {
    selectedDates.selectedDates.forEach((monthData) => {
      if (monthData.month == month) {
        monthData.dates.forEach(
          (selectedDaysInMonth) => (selectedDateMapper[selectedDaysInMonth] = 1)
        );
      }
    });
  }

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

  const updateDateSelection = (month, day, dateAlreadyAdded) => {
    let newMap = { ...monthDateSelectionMapper };
    if (dateAlreadyAdded == true) {
      // we have to remove it
      let set = newMap[month];
      set.delete(day);
      newMap[month] = new Set(set);
    } else {
      // we have to add
      if (newMap[month]) {
        let set = newMap[month];
        set.add(day);
        newMap[month] = set;
      } else {
        newMap[month] = new Set();
        newMap[month].add(day);
      }
    }
    updateUserDateSelection(newMap);
    setMonthDateSelectionMapper(newMap);
  };

  return (
    <>
      <div className="flex flex-col h-full w-[300px] gap-2">
        {weekInMonth &&
          weekInMonth.map((dayInWeek, weekIndex) => (
            <>
              <div
                key={`week-${weekIndex}-${dayInWeek[0]}-`}
                className="flex gap-2"
              >
                {dayInWeek.map((day) => (
                  <>
                    <span
                      key={`week-${weekIndex}-${dayInWeek[0]}-${day}`}
                      onClick={() =>
                        updateDateSelection(
                          month,
                          day,
                          monthDateSelectionMapper[month] &&
                            monthDateSelectionMapper[month].has(day)
                        )
                      }
                      className={`h-[35px] w-[35px] rounded-[50%] addBorder centerDiv ${
                        selectedDateMapper[day] == 1
                          ? `text-[red] cursor-none`
                          : `text-[green] cursor-pointer`
                      }
                       ${
                         monthDateSelectionMapper[month] &&
                         monthDateSelectionMapper[month].has(day)
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
  selectedDates: propTypes.array,
  updateUserDateSelection: propTypes.func,
};
