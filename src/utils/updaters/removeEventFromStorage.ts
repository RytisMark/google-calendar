import { CalendarInfo } from "../../types.js";
import { getEvents } from "../getters/getEvents.js";
import { getExtEvents } from "../getters/getExtEvents.js";

export function removeEventFromStorage(eventId: string, calendarInfo: CalendarInfo) {
	let events = getEvents();
	events = events.filter(event => event.eventId !== eventId);
	localStorage.setItem("events", JSON.stringify(events));
	calendarInfo.extEvents = getExtEvents(events);
}
