import { generateEventId } from "./generateEventId.js";
import { Event } from "../../types.js";

export function createEventObject() {
	const eventTitle = (document.querySelector(".event-title") as HTMLInputElement).value;
	const startDateJson = (document.querySelector(".start-date") as HTMLInputElement).value;
	const endHourTxt = (document.querySelector(".end-date") as HTMLInputElement).value;
	const endDateJson = startDateJson.slice(0, -5) + endHourTxt;
	const description = (document.querySelector(".description") as HTMLTextAreaElement).value;

	return {
		eventId: generateEventId(),
		eventTitle,
		startDateJson,
		endDateJson,
		description,
	} as Event;
}
