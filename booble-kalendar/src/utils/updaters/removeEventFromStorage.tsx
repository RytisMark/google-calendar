import { ExtendedEvent } from "../../types";
import { getEvents } from "../getters/getEvents";
import { getExtEvents } from "../getters/getExtEvents";

export function removeEventFromStorage(eventId: string, extEvents: ExtendedEvent[]) {
	let events = getEvents();
	events = events.filter(event => event.eventId !== eventId);
	localStorage.setItem("events", JSON.stringify(events));
	extEvents = getExtEvents(events);
}
