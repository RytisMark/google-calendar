import { renderEvent } from "./renderEvent.js";
import { isSameWeek } from "../checkers/isSameWeek.js";

export function renderAll(calendarInfo) {
	const currDate = calendarInfo.stateDate;

	if (localStorage.length === 0) return;
	for (let i = 1; i <= localStorage.length; i++) {
		const eventInfo = JSON.parse(localStorage.getItem(i));
		if (!eventInfo) continue;
		const eventStartDate = new Date(eventInfo.startDateTxt);
		if (isSameWeek(currDate, eventStartDate)) {
			renderEvent(JSON.parse(localStorage.getItem(i)));
		}
	}
}
