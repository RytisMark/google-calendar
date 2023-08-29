import { isSameDay } from "../../utils/checkers/isSameDay";
import { getDateNthDaysFromCurrent } from "../../utils/getters/getDateNthDaysFromCurrent";

export function Weekdays(props: { stateDate: Date }) {
  const weekdayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const today = new Date();
  const currDayOfTheWeek = props.stateDate.getDay() || 7;

  const tempDates = [];
  for (let day = 0; day < 7; day++) {
    const tempDate = getDateNthDaysFromCurrent(props.stateDate, day - currDayOfTheWeek + 1);
    tempDates.push(tempDate);
  }

  const weekdays = tempDates.map((tempDate, index) => {
    let classList = "";
    if (isSameDay(tempDate, today)) classList = "present-day";

    const weekdayNum = <span className={classList + " day-of-month"}>{tempDate.getDate().toString()}</span>;
    const weekdayName = <span className={classList + " day-of-week"}>{weekdayNames[index]}</span>;
    return (
      <div key={index} className="weekday">
        {weekdayName} {weekdayNum}
      </div>
    );
  });

  return <div className="weekdays">{weekdays}</div>;
}
