import { updateCalendar } from "./updateCalendar.js";
import { getDateWithNewDay } from "../getters/getDateWithNewDay.js";
import { isSameDay } from "../checkers/isSameDay.js";
import { isSameMonth } from "../checkers/isSameMonth.js";

export function updateMonthOverview(calendarInfo) {
	const stateDate = calendarInfo.stateDate;
	const overviewDate = calendarInfo.overviewDate;

	let tempDate = new Date();
	const today = new Date();
	const weekDayOfFirstDay = getDateWithNewDay(overviewDate, 1).getDay() || 7;

	const overviewMonthTable = document.querySelector(".overview-month-table");
	for (let day = 1; day <= 42; day++) {
		const monthday = overviewMonthTable.querySelector(`:nth-child(${day})`);

		tempDate = getDateWithNewDay(overviewDate, 1 + day - weekDayOfFirstDay);
		monthday.textContent = tempDate.getDate();

		if (!isSameMonth(tempDate, overviewDate)) {
			monthday.classList.add("other-month");
		} else {
			monthday.classList.remove("other-month");
		}

		if (
			tempDate.getFullYear() === stateDate.getFullYear() &&
			tempDate.getMonth() === stateDate.getMonth() &&
			tempDate.getDate() === stateDate.getDate()
		) {
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
			calendarInfo.stateDate = getDateWithNewDay(overviewDate, 1 + day - weekDayOfFirstDay);
			calendarInfo.overviewDate = new Date(calendarInfo.stateDate);
			updateCalendar(calendarInfo);
		};
	}
}
