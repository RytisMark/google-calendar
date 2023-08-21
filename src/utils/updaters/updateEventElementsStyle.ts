import { CalendarInfo, ExtendedEvent } from "../../types.js";
import { getFilteredExtEvents } from "../getters/getFilteredExtEvents.js";
import { updateEventElementStyle } from "./updateEventElementStyle.js";

export function updateEventElementsStyle(extEvent: ExtendedEvent, calendarInfo: CalendarInfo) {
	const { startDate } = extEvent;
	const filteredExtEvents = getFilteredExtEvents(startDate, calendarInfo);
	filteredExtEvents.forEach(event => {
		const eventElem = document.querySelector(`[data-event-id='${event.eventId}']`) as HTMLDivElement;
		updateEventElementStyle(eventElem, event, calendarInfo);
	});
}
