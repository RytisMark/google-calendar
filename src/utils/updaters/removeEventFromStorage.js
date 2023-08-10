import { getEvents } from "../getters/getEvents.js";
import { getExtEvents } from "../getters/getExtEvents.js";

export function removeEventFromStorage(eventId, calendarInfo) {
	let events = getEvents();

	for (let i = 0; i < events.length; i++) {
		const event = events[i];
		if (event.eventId === eventId) {
			events.splice(i, 1);
			localStorage.setItem("events", JSON.stringify(events));
			calendarInfo.extEvents = getExtEvents(events);
			break;
		}
	}
}
