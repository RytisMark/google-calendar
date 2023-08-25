import { generateEventId } from "./generateEventId";
import { Event } from "../../types";

export function createEventObject(eventObj: { eventTitle: string; startDateJson: string; endDateJson: string; description: string }): Event {
	// const eventTitle = (document.querySelector(".event-title") as HTMLInputElement).value;
	// const startDateJson = (document.querySelector(".start-date") as HTMLInputElement).value;
	// const endHourTxt = (document.querySelector(".end-date") as HTMLInputElement).value;
	// const endDateJson = startDateJson.slice(0, -5) + endHourTxt;
	// const description = (document.querySelector(".description") as HTMLTextAreaElement).value;

	return {
		eventId: generateEventId(),
		...eventObj,
		// eventTitle,
		// startDateJson,
		// endDateJson,
		// description,
	};
}
