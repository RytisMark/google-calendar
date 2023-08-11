import { eventLogic } from "./eventLogic.js";
import { getEventHeight } from "../getters/getEventHeight.js";
import { getEventStartPos } from "../getters/getEventStartPos.js";
import { getTableCell } from "../getters/getTableCell.js";

export function createEventElem(extEvent, calendarInfo) {
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
		eventLogic(e.currentTarget, extEvent, calendarInfo);
		e.stopPropagation();
	});

	return eventElem;
}
