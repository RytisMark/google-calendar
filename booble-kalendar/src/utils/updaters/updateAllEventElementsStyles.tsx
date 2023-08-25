import { ExtendedEvent } from "../../types";
import { getFilteredExtEvents } from "../getters/getFilteredExtEvents";
import { updateEventElementStyle } from "./updateEventElementStyle";

export function updateAllEventElementsStyles(extEvent: ExtendedEvent, extEvents: ExtendedEvent[]) {
	const { startDate } = extEvent;
	const filteredExtEvents = getFilteredExtEvents(startDate, extEvents);
	filteredExtEvents.forEach(event => {
		const eventElem = document.querySelector(`.event[data-event-id='${event.eventId}']`) as HTMLDivElement;
		updateEventElementStyle(eventElem, event, extEvents);
	});
}
