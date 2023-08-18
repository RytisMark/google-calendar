import { eventLogic } from "./eventLogic.js";
import { getEventHeight } from "../getters/getEventHeight.js";
import { getEventTopPos } from "../getters/getEventTopPos.js";
import { getEventLeftPos } from "../getters/getEventLeftPos.js";
import { getTableCell } from "../getters/getTableCell.js";
import { getEventZIndex } from "../getters/getEventZIndex.js";
import { CalendarInfo, ExtendedEvent } from "../../types.js";

export function createEventElem(extEvent: ExtendedEvent, calendarInfo: CalendarInfo) {
	let { eventId, eventTitle, startDate, endDate, eventTime, minutes } = extEvent;
	const tableCell = getTableCell(extEvent);

	const eventElem = document.createElement("div");
	eventElem.classList.add("event");
	eventElem.setAttribute("data-event-id", eventId);
	eventElem.style.top = `${getEventTopPos(tableCell, minutes)}px`;
	const eventLeftPos = getEventLeftPos(eventElem, startDate, calendarInfo);
	eventElem.style.left = `${eventLeftPos}%`;
	eventElem.style.height = `${getEventHeight(tableCell, eventElem, startDate, endDate)}px`;
	eventElem.style.width = `${100 - eventLeftPos}%`;
	eventElem.style.zIndex = `${getEventZIndex(tableCell, eventElem)}`;

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
