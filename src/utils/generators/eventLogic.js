import { getEventTime } from "../getters/getEventTime.js";

export function eventLogic(eventElement, eventObj) {
	let { eventId, eventTitle, startDateTxt, endDateTxt, description } = eventObj;
	const startDate = new Date(startDateTxt);
	const endDate = new Date(endDateTxt);
	const eventTime = getEventTime(startDate, endDate);

	const eventDescModal = document.querySelector(".event-desc-modal");
	const trashBtn = document.querySelector(".trash-btn");
	const closeBtn = document.querySelector(".desc-modal-btns > .close-btn");
	const eventDescTitle = document.querySelector(".event-desc-title");
	const eventDescTime = document.querySelector(".event-desc-time");
	const eventDesc = document.querySelector(".event-desc");

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
}
