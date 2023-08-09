import { generateEventId } from "./generateEventId.js";

export function createEventObject(calendarInfo) {
	const eventTitle = document.querySelector(".event-title").value;
	const startDateTxt = document.querySelector(".start-date").value;
	const endHourTxt = document.querySelector(".end-date").value;
	const endDateTxt = startDateTxt.slice(0, -5) + endHourTxt;
	const description = document.querySelector(".description").value;

	return {
		eventId: generateEventId(calendarInfo),
		eventTitle,
		startDateTxt,
		endDateTxt,
		description,
	};
}
