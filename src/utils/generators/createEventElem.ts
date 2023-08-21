import { CalendarInfo, ExtendedEvent } from "../../types.js";
import { eventLogic } from "./eventLogic.js";
import { updateEventElementStyle } from "../updaters/updateEventElementStyle.js";

export function createEventElem(extEvent: ExtendedEvent, calendarInfo: CalendarInfo) {
	let { eventId, eventTitle, eventTime } = extEvent;

	const eventElem = document.createElement("div");
	eventElem.classList.add("event");
	eventElem.setAttribute("data-event-id", eventId);
	updateEventElementStyle(eventElem, extEvent, calendarInfo);

	const titleElem = document.createElement("span");
	const timeElem = document.createElement("span");
	titleElem.textContent = `${eventTitle}, `;
	titleElem.style.fontWeight = "bold";
	timeElem.textContent = eventTime;

	eventElem.append(titleElem, timeElem);

	eventElem.addEventListener("click", e => {
		eventLogic(eventElem, extEvent, calendarInfo);
		e.stopPropagation();
	});

	return eventElem;
}
