import { ExtendedEvent } from "../../types";
import { getFilteredExtEvents } from "./getFilteredExtEvents";

export function getEventZIndex(extEvent: ExtendedEvent, extEvents: ExtendedEvent[]): string {
	const { startDate } = extEvent;

	const filteredExtEvents = getFilteredExtEvents(startDate, extEvents);
	const zIndex = filteredExtEvents.findIndex(event => event.eventId === extEvent.eventId);

	return `${zIndex + 1}`;
}
