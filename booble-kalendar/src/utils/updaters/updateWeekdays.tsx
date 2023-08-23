import { CalendarInfo } from "../../types.js";
import { isSameDay } from "../checkers/isSameDay.js";
import { getDateNthDaysFromCurrent } from "../getters/getDateNthDaysFromCurrent.js";

export function updateWeekdays(calendarInfo: CalendarInfo) {
	const { stateDate } = calendarInfo;

	let tempDate = new Date();
	const today = new Date();
	const currDayOfTheWeek = stateDate.getDay() || 7;

	const weekdays = document.querySelector(".weekdays") as HTMLDivElement;
	for (let day = 1; day <= 7; day++) {
		const weekday = weekdays.querySelector(`:nth-child(${day} of .weekday)`) as HTMLDivElement;
		const weekdayNum = weekday.querySelector(".day-of-month") as HTMLSpanElement;
		const weekdayName = weekday.querySelector(".day-of-week") as HTMLSpanElement;
		tempDate = getDateNthDaysFromCurrent(stateDate, day - currDayOfTheWeek);
		weekdayNum.textContent = tempDate.getDate().toString();

		if (isSameDay(tempDate, today)) {
			weekdayNum.classList.add("present-day");
			weekdayName.classList.add("present-day");
		} else {
			weekdayNum.classList.remove("present-day");
			weekdayName.classList.remove("present-day");
		}
	}
}
