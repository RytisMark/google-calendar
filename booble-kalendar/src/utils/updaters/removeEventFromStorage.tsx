import { ExtendedEvent } from "../../types.js";
import { getEvents } from "../getters/getEvents.js";
import { getExtEvents } from "../getters/getExtEvents.js";

export function removeEventFromStorage(eventId: string, extEvents: ExtendedEvent[]) {
	let events = getEvents();
	events = events.filter(event => event.eventId !== eventId);
	localStorage.setItem("events", JSON.stringify(events));
	extEvents = getExtEvents(events);
}
