import { CalendarInfo, Event, ExtendedEvent } from "../../types.js";
import { getEvents } from "../getters/getEvents.js";

export function saveEventToStorage(event: Event, extEvent: ExtendedEvent, calendarInfo: CalendarInfo) {
	const extEvents = calendarInfo.extEvents;
	extEvents.push(extEvent);

	const events = getEvents();
	localStorage.setItem("events", JSON.stringify([...events, event]));
}
