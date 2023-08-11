import { generateEventId } from "./generateEventId.js";

export function createEventObject() {
	const eventTitle = document.querySelector(".event-title").value;
	const startDateJson = document.querySelector(".start-date").value;
	const endHourTxt = document.querySelector(".end-date").value;
	const endDateJson = startDateJson.slice(0, -5) + endHourTxt;
	const description = document.querySelector(".description").value;

	return {
		eventId: generateEventId(),
		eventTitle,
		startDateJson,
		endDateJson,
		description,
	};
}
