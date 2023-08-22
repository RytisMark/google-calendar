import { Event, ExtendedEvent } from "../../types.js";
import { getEvents } from "../getters/getEvents.js";

export function saveEventToStorage(event: Event, extEvent: ExtendedEvent, extEvents: ExtendedEvent[]) {
	extEvents.push(extEvent);

	const events = getEvents();
	localStorage.setItem("events", JSON.stringify([...events, event]));
}
