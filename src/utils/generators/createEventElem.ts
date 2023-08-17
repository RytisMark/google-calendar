import { eventLogic } from "./eventLogic.js";
import { getEventHeight } from "../getters/getEventHeight.js";
import { getEventStartPos } from "../getters/getEventStartPos.js";
import { getTableCell } from "../getters/getTableCell.js";
import { CalendarInfo, ExtendedEvent } from "../../types.js";

export function createEventElem(extEvent: ExtendedEvent, calendarInfo: CalendarInfo) {
	let { eventId, eventTitle, startDate, endDate, eventTime, minutes } = extEvent;
	const tableCell = getTableCell(extEvent);

	const eventElem = document.createElement("div");
	eventElem.classList.add("event");
	eventElem.setAttribute("data-event-id", eventId);
	eventElem.style.height = `${getEventHeight(tableCell, startDate, endDate)}px`;
	eventElem.style.marginTop = `${getEventStartPos(tableCell, minutes)}px`;

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
