import { OverviewMonthTableProps } from "../../types";
import { isSameDay } from "../../utils/checkers/isSameDay";
import { isSameMonth } from "../../utils/checkers/isSameMonth";
import { getDateWithNewDay } from "../../utils/getters/getDateWithNewDay";

export function OverviewMonthTable(props: OverviewMonthTableProps) {
  const today = new Date();
  const weekDayOfFirstDayOfMonth = getDateWithNewDay(props.overviewDate, 1).getDay() || 7;

  const tempDates = [];
  for (let day = 1; day <= 42; day++) {
    const tempDate = getDateWithNewDay(props.overviewDate, 1 + day - weekDayOfFirstDayOfMonth);
    tempDates.push(tempDate);
  }

  const monthdays = tempDates.map((tempDate, index) => {
    let classList = "";
    if (!isSameMonth(tempDate, props.overviewDate)) {
      classList += "other-month ";
    } else {
      classList.replace("other-month ", "");
    }

    if (isSameDay(tempDate, props.stateDate)) {
      classList += "current-day ";
    } else {
      classList.replace("current-day ", "");
    }

    if (isSameDay(tempDate, today)) {
      classList += "present-day ";
    } else {
      classList.replace("present-day ", "");
    }

    return (
      <button key={index} className={classList} onClick={() => props.changeToSelectedDay(tempDate)}>
        {tempDate.getDate().toString()}
      </button>
    );
  });

  return <div className="overview-month-table">{monthdays}</div>;
}
