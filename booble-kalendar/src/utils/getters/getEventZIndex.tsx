import { ExtendedEvent } from "../../types";
import { getFilteredExtEvents } from "./getFilteredExtEvents";

export function getEventZIndex(eventElem: HTMLDivElement, startDate: Date, extEvents: ExtendedEvent[]): string {
	const filteredExtEvents = getFilteredExtEvents(startDate, extEvents);
	const zIndex = filteredExtEvents.findIndex(extEvent => eventElem.getAttribute("data-event-id") === extEvent.eventId);

	return `${zIndex + 1}`;
}
