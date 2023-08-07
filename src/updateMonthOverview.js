import { updateCalendar } from "./updateCalendar.js";

export function updateMonthOverview(calendarInfo) {
	const stateDate = calendarInfo.stateDate;
	const overviewDate = calendarInfo.overviewDate;

	let tempDate = new Date();
	const today = new Date();
	const weekDayOfFirstDay = new Date(overviewDate.getFullYear(), overviewDate.getMonth(), 1).getDay() || 7;

	const overviewMonthTable = document.querySelector(".overview-month-table");
	for (let day = 1; day <= 42; day++) {
		const monthday = overviewMonthTable.querySelector(`:nth-child(${day})`);

		tempDate = new Date(overviewDate.getFullYear(), overviewDate.getMonth(), day - weekDayOfFirstDay + 1);
		const nthDay = tempDate.getDate();
		monthday.textContent = nthDay;

		if (tempDate.getMonth() != overviewDate.getMonth()) {
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

		if (
			tempDate.getFullYear() === today.getFullYear() &&
			tempDate.getMonth() === today.getMonth() &&
			tempDate.getDate() === today.getDate() &&
			tempDate.getDay() === today.getDay()
		) {
			monthday.classList.add("present-day");
		} else {
			monthday.classList.remove("present-day");
		}

		monthday.onclick = () => {
			calendarInfo.stateDate = new Date(overviewDate.getFullYear(), overviewDate.getMonth(), day - weekDayOfFirstDay + 1);
			calendarInfo.overviewDate = new Date(calendarInfo.stateDate);
			updateCalendar(calendarInfo);
		};
	}
}
