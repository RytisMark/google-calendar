import { removeEventFromStorage } from "../updaters/removeEventFromStorage.js";

export function eventLogic(eventElem, extEvent, calendarInfo) {
	let { eventId, eventTitle, eventTime, description } = extEvent;

	const eventDescModalElem = document.querySelector(".event-desc-modal");
	const trashBtn = document.querySelector(".trash-btn");
	const closeBtn = document.querySelector(".desc-modal-btns > .close-btn");
	const eventDescTitleElem = document.querySelector(".event-desc-title");
	const eventDescTimeElem = document.querySelector(".event-desc-time");
	const eventDescElem = document.querySelector(".event-desc");

	eventDescTitleElem.textContent = eventTitle;
	eventDescTimeElem.textContent = eventTime;
	eventDescElem.textContent = description;

	if (eventDescModalElem.getAttribute("data-event-id") === eventElem.getAttribute("data-event-id")) {
		eventDescModalElem.classList.toggle("non-displayed");
	} else {
		eventDescModalElem.classList.remove("non-displayed");
	}

	eventDescModalElem.setAttribute("data-event-id", eventId);

	trashBtn.onclick = () => {
		eventElem.parentNode.removeChild(eventElem);
		removeEventFromStorage(eventId, calendarInfo);
		eventDescElem.classList.add("non-displayed");
	};

	closeBtn.onclick = () => {
		eventDescModalElem.classList.add("non-displayed");
	};
}
