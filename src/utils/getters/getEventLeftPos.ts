import { CalendarInfo } from "../../types.js";
import { getEventMaxWidth } from "./getEventMaxWidth.js";
import { getFilteredExtEvents } from "./getFilteredExtEvents.js";

export function getEventLeftPos(eventElem: HTMLDivElement, startDate: Date, calendarInfo: CalendarInfo): string {
	const filteredExtEvents = getFilteredExtEvents(startDate, calendarInfo);
	const eventsLength = filteredExtEvents.length;
	const maxWidth = getEventMaxWidth();

	const columnWidth = `calc(${maxWidth} / (${eventsLength + 1})`;
	const eventIndex = filteredExtEvents.findIndex(extEvent => eventElem.getAttribute("data-event-id") === extEvent.eventId);

	return `calc(${eventIndex} * ${columnWidth}`;
}
