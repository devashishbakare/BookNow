import propTypes from "prop-types";
export const Calendar = ({
  year,
  month,
  day,
  selectedDates,
  userMonthDateSelection,
  setUserMonthDateSelection,
}) => {
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
  let dayCounter = 1;
  let week = [];
  while (dayCounter <= totalDayInMonth) {
    if (dayCounter % 7 != 0) {
      week.push(dayCounter);
    } else {
      week.push(dayCounter);
      weekInMonth.push(week);
      week = [];
    }
    dayCounter++;
  }
  if (week.length > 0) weekInMonth.push(week);

  const updateDateSelection = (month, selectedDay, dateAlreadyAdded) => {
    if (selectedDay < day) return;
    let newMap = { ...userMonthDateSelection };
    if (dateAlreadyAdded == true) {
      // we have to remove it
      let set = newMap[month];
      set.delete(selectedDay);
      if (set.size == 0) {
        delete newMap[month];
      } else {
        newMap[month] = new Set(set);
      }
    } else {
      // we have to add
      if (newMap[month]) {
        let set = newMap[month];
        set.add(selectedDay);
        newMap[month] = set;
      } else {
        newMap[month] = new Set();
        newMap[month].add(selectedDay);
      }
    }
    setUserMonthDateSelection(newMap);
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
                {dayInWeek.map((weekDay) => (
                  <>
                    <span
                      key={`week-${weekIndex}-${dayInWeek[0]}-${weekDay}`}
                      onClick={() =>
                        updateDateSelection(
                          month,
                          weekDay,
                          userMonthDateSelection[month] &&
                            userMonthDateSelection[month].has(weekDay)
                        )
                      }
                      className={`h-[35px] w-[35px] rounded-[50%] addBorder centerDiv ${
                        selectedDateMapper[weekDay] == 1 || weekDay < day
                          ? `text-[red] cursor-none opacity-40`
                          : `text-[green] cursor-pointer`
                      }
                       ${
                         userMonthDateSelection[month] &&
                         userMonthDateSelection[month].has(weekDay)
                           ? "bg-[black] text-[white]"
                           : ""
                       }
                      `}
                    >
                      {weekDay}
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
  day: propTypes.number.isRequired,
  selectedDates: propTypes.array,
  userMonthDateSelection: propTypes.object,
  setUserMonthDateSelection: propTypes.func,
};
