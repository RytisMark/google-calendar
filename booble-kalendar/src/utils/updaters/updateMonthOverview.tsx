import { updateCalendar } from "./updateCalendar.js";
import { getDateWithNewDay } from "../getters/getDateWithNewDay.js";
import { isSameDay } from "../checkers/isSameDay.js";
import { isSameMonth } from "../checkers/isSameMonth.js";
import { CalendarInfo } from "../../types.js";

export function updateMonthOverview(calendarInfo: CalendarInfo) {
	const { stateDate, overviewDate } = calendarInfo;

	let tempDate = new Date();
	const today = new Date();
	const weekDayOfFirstDayOfMonth = getDateWithNewDay(overviewDate, 1).getDay() || 7;

	const overviewMonthTable = document.querySelector(".overview-month-table") as HTMLDivElement;
	for (let day = 1; day <= 42; day++) {
		const monthday = overviewMonthTable.querySelector(`:nth-child(${day})`) as HTMLButtonElement;

		tempDate = getDateWithNewDay(overviewDate, 1 + day - weekDayOfFirstDayOfMonth);
		monthday.textContent = tempDate.getDate().toString();

		if (!isSameMonth(tempDate, overviewDate)) {
			monthday.classList.add("other-month");
		} else {
			monthday.classList.remove("other-month");
		}

		if (isSameDay(tempDate, stateDate)) {
			monthday.classList.add("current-day");
		} else {
			monthday.classList.remove("current-day");
		}

		if (isSameDay(tempDate, today)) {
			monthday.classList.add("present-day");
		} else {
			monthday.classList.remove("present-day");
		}

		monthday.onclick = () => {
			calendarInfo.stateDate = getDateWithNewDay(overviewDate, 1 + day - weekDayOfFirstDayOfMonth);
			calendarInfo.overviewDate = new Date(calendarInfo.stateDate);
			updateCalendar(calendarInfo);
		};
	}
}
