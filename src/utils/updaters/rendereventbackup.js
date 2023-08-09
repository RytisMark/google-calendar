import { getEventHeight } from "../getters/getEventHeight.js";
import { getEventStartPos } from "../getters/getEventStartPos.js";
import { getEventTime } from "../getters/getEventTime.js";

export function renderEvent(newEvent) {
	let { eventId, eventTitle, startDateTxt, endDateTxt, description } = newEvent;
	const startDate = new Date(startDateTxt);
	const endDate = new Date(endDateTxt);
	const eventTime = getEventTime(startDate, endDate);
	const startHour = parseInt(eventTime.slice(0, 2), 10);
	const startMinutes = parseInt(eventTime.slice(3, 5), 10);

	const columnNum = startDate.getDay() || 7;
	const weekViewTable = document.querySelector(".week-view-table");
	const tableCol = weekViewTable.querySelector(`:nth-child(${columnNum} of .table-column)`);
	const tableCell = tableCol.querySelector(`:nth-child(${startHour + 1})`);

	const eventDescModal = document.querySelector(".event-desc-modal");
	const trashBtn = document.querySelector(".trash-btn");
	const closeBtn = document.querySelector(".desc-modal-btns > .close-btn");
	const eventDescTitle = document.querySelector(".event-desc-title");
	const eventDescTime = document.querySelector(".event-desc-time");
	const eventDesc = document.querySelector(".event-desc");

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

	tableCell.append(eventElement);

	eventElement.addEventListener("click", e => {
		eventDescTitle.textContent = eventTitle;
		eventDescTime.textContent = eventTime;
		eventDesc.textContent = description;

		if (eventDescModal.getAttribute("data-event-id") === eventElement.getAttribute("data-event-id")) {
			eventDescModal.classList.toggle("non-displayed");
		} else {
			eventDescModal.classList.remove("non-displayed");
		}

		eventDescModal.setAttribute("data-event-id", eventId);

		trashBtn.onclick = () => {
			eventElement.parentNode.removeChild(eventElement);
			localStorage.removeItem(eventId);
			eventDesc.classList.add("non-displayed");
		};

		closeBtn.onclick = () => {
			eventDescModal.classList.add("non-displayed");
		};

		e.stopPropagation();
	});
}
