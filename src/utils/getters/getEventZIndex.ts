import { CalendarInfo } from "../../types.js";
import { getFilteredExtEvents } from "./getFilteredExtEvents.js";

export function getEventZIndex(eventElem: HTMLDivElement, startDate: Date, calendarInfo: CalendarInfo): string {
	const filteredExtEvents = getFilteredExtEvents(startDate, calendarInfo);
	const zIndex = filteredExtEvents.findIndex(extEvent => eventElem.getAttribute("data-event-id") === extEvent.eventId);

	return `${zIndex + 1}`;
}
