import { getEventTime } from "../getters/getEventTime.js";
import { eventLogic } from "./eventLogic.js";
import { getEventHeight } from "../getters/getEventHeight.js";
import { getEventStartPos } from "../getters/getEventStartPos.js";

export function createEvent(eventObj, calendarInfo) {
	let { eventId, eventTitle, startDateTxt, endDateTxt } = eventObj;
	const startDate = new Date(startDateTxt);
	const endDate = new Date(endDateTxt);
	const eventTime = getEventTime(startDate, endDate);
	const startHour = parseInt(eventTime.slice(0, 2), 10);
	const startMinutes = parseInt(eventTime.slice(3, 5), 10);

	const columnNum = startDate.getDay() || 7;
	const weekViewTable = document.querySelector(".week-view-table");
	const tableCol = weekViewTable.querySelector(`:nth-child(${columnNum} of .table-column)`);
	const tableCell = tableCol.querySelector(`:nth-child(${startHour + 1})`);

	const eventElement = document.createElement("div");
	eventElement.classList.add("event");
	eventElement.setAttribute("data-event-id", eventId);
	// eventElement.style.zIndex = "auto";
	eventElement.style.height = `${getEventHeight(tableCell, startDate, endDate)}px`;
	eventElement.style.marginTop = `${getEventStartPos(tableCell, startMinutes)}px`;
	const titleElement = document.createElement("span");
	const timeElement = document.createElement("span");
	titleElement.textContent = `${eventTitle}, `;
	titleElement.style.fontWeight = "bold";
	timeElement.textContent = eventTime;
	eventElement.append(titleElement, timeElement);

	eventElement.addEventListener("click", e => {
		eventLogic(e.currentTarget, eventObj, calendarInfo);
		e.stopPropagation();
	});

	return eventElement;
}
