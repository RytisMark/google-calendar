export function updateWeekdays(calendarInfo) {
	const stateDate = calendarInfo.stateDate;
	let tempDate = new Date();
	const today = new Date();
	const dayOfTheWeek = stateDate.getDay() || 7;

	const weekdays = document.querySelector(".weekdays");
	for (let day = 1; day <= 7; day++) {
		const weekday = weekdays.querySelector(`:nth-child(${day} of .weekday)`).querySelector(".day-of-month");
		const weekdayName = weekdays.querySelector(`:nth-child(${day} of .weekday)`).querySelector(".day-of-week");
		tempDate = new Date(stateDate.getFullYear(), stateDate.getMonth(), stateDate.getDate() - dayOfTheWeek + day);
		const nthDay = tempDate.getDate();
		weekday.textContent = nthDay;

		if (tempDate.getMonth() === today.getMonth() && tempDate.getDate() === today.getDate() && tempDate.getDay() === today.getDay()) {
			weekday.classList.add("present-day");
			weekdayName.classList.add("present-day");
		} else {
			weekday.classList.remove("present-day");
			weekdayName.classList.remove("present-day");
		}
	}
}
