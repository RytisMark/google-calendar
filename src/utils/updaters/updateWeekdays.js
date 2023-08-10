import { isSameDay } from "../checkers/isSameDay.js";
import { getDateNthDaysAway } from "../getters/getDateNthDaysAway.js";

export function updateWeekdays(calendarInfo) {
	const { stateDate } = calendarInfo;

	let tempDate = new Date();
	const today = new Date();
	const currDayOfTheWeek = stateDate.getDay() || 7;

	const weekdays = document.querySelector(".weekdays");
	for (let day = 1; day <= 7; day++) {
		const weekday = weekdays.querySelector(`:nth-child(${day} of .weekday)`).querySelector(".day-of-month");
		const weekdayName = weekdays.querySelector(`:nth-child(${day} of .weekday)`).querySelector(".day-of-week");
		tempDate = getDateNthDaysAway(stateDate, day - currDayOfTheWeek);
		weekday.textContent = tempDate.getDate();

		if (isSameDay(tempDate, today)) {
			weekday.classList.add("present-day");
			weekdayName.classList.add("present-day");
		} else {
			weekday.classList.remove("present-day");
			weekdayName.classList.remove("present-day");
		}
	}
}
