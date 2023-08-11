import { removeEventFromStorage } from "../updaters/removeEventFromStorage.js";

export function eventLogic(eventElem, extEvent, calendarInfo) {
	let { eventId, eventTitle, eventTime, description } = extEvent;

	const eventDescModalElem = document.querySelector(".event-desc-modal");
	const trashBtn = document.querySelector(".trash");
	const closeBtn = document.querySelector(".desc-modal-controls-container > .close");
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
		eventDescModalElem.classList.add("non-displayed");
		eventElem.remove();
		removeEventFromStorage(eventId, calendarInfo);
	};

	closeBtn.onclick = () => {
		eventDescModalElem.classList.add("non-displayed");
	};
}
