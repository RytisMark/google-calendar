import { ExtendedEvent } from "../../types.js";
import { getFilteredExtEvents } from "../getters/getFilteredExtEvents.js";
import { updateEventElementStyle } from "./updateEventElementStyle.js";

export function updateAllEventElementsStyles(extEvent: ExtendedEvent, extEvents: ExtendedEvent[]) {
	const { startDate } = extEvent;
	const filteredExtEvents = getFilteredExtEvents(startDate, extEvents);
	filteredExtEvents.forEach(event => {
		const eventElem = document.querySelector(`[data-event-id='${event.eventId}']`) as HTMLDivElement;
		updateEventElementStyle(eventElem, event, extEvents);
	});
}
