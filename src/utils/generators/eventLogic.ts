import { CalendarInfo, ExtendedEvent } from "../../types.js";
import { removeEventFromStorage } from "../updaters/removeEventFromStorage.js";
import { updateEventElementsStyle } from "../updaters/updateEventElementsStyle.js";

export function eventLogic(eventElem: HTMLDivElement, extEvent: ExtendedEvent, calendarInfo: CalendarInfo) {
	let { eventId, eventTitle, eventTime, description } = extEvent;

	const eventDescModalElem = document.querySelector(".event-desc-modal") as HTMLDivElement;
	const trashBtn = document.querySelector(".trash") as HTMLButtonElement;
	const closeBtn = document.querySelector(".desc-modal-controls-container > .close") as HTMLButtonElement;
	const eventDescTitleElem = document.querySelector(".event-desc-title") as HTMLDivElement;
	const eventDescTimeElem = document.querySelector(".event-desc-time") as HTMLDivElement;
	const eventDescElem = document.querySelector(".event-desc") as HTMLDivElement;

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
		updateEventElementsStyle(extEvent, calendarInfo);
	};

	closeBtn.onclick = () => {
		eventDescModalElem.classList.add("non-displayed");
	};
}
