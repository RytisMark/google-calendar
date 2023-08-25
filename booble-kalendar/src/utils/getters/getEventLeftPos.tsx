import { ExtendedEvent } from "../../types";
import { getEventMaxWidth } from "./getEventMaxWidth";
import { getFilteredExtEvents } from "./getFilteredExtEvents";

export function getEventLeftPos(eventElem: HTMLDivElement, startDate: Date, extEvents: ExtendedEvent[]): string {
	const filteredExtEvents = getFilteredExtEvents(startDate, extEvents);
	const eventsLength = filteredExtEvents.length;
	const maxWidth = getEventMaxWidth();

	const columnWidth = `calc(${maxWidth} / (${eventsLength + 1})`;
	const eventIndex = filteredExtEvents.findIndex(extEvent => eventElem.getAttribute("data-event-id") === extEvent.eventId);

	return `calc(${eventIndex} * ${columnWidth}`;
}
