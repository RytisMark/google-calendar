import { getEvents } from "../getters/getEvents.js";

export function saveEventToStorage(event, extEvent, calendarInfo) {
	const extEvents = calendarInfo.extEvents;
	extEvents.push(extEvent);

	const events = getEvents();
	localStorage.setItem("events", JSON.stringify([...events, event]));
}
