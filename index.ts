import { createTable } from "./src/utils/generators/createTable.js";
import { createEventObject } from "./src/utils/generators/createEventObject.js";
import { createExtendedEventObject } from "./src/utils/generators/createExtendedEventObject.js";
import { getEvents } from "./src/utils/getters/getEvents.js";
import { getExtEvents } from "./src/utils/getters/getExtEvents.js";
import { updateCalendar } from "./src/utils/updaters/updateCalendar.js";
import { updateMiniCalendar } from "./src/utils/updaters/updateMiniCalendar.js";
import { updateEventEndDateInputError } from "./src/utils/updaters/updateEventEndDateInputError.js";
import { isCorrectDate } from "./src/utils/checkers/isCorrectDate.js";
import { saveEventToStorage } from "./src/utils/updaters/saveEventToStorage.js";
import { renderEvent } from "./src/utils/updaters/renderEvent.js";
import { CalendarInfo } from "./src/types.js";
import { updateAllEventElementsStyles } from "./src/utils/updaters/updateAllEventElementsStyles.js";

const init = () => {
	const calendarInfo: CalendarInfo = {
		stateDate: new Date(),
		overviewDate: new Date(),
		extEvents: getExtEvents(getEvents()),
	};

	const menuBtn = document.querySelector(".menu-btn") as HTMLButtonElement;
	const mainMenuBtn = document.querySelector(".main-menu") as HTMLButtonElement;
	const todayBtn = document.querySelector(".today-btn") as HTMLButtonElement;
	const nextWeekViewBtn = document.querySelector(".nav-arrow.arrow-right") as HTMLButtonElement;
	const prevWeekViewBtn = document.querySelector(".nav-arrow.arrow-left") as HTMLButtonElement;
	const nextMonthViewBtn = document.querySelector(".nav-arrow-small.arrow-right") as HTMLButtonElement;
	const prevMonthViewBtn = document.querySelector(".nav-arrow-small.arrow-left") as HTMLButtonElement;
	const createEventBtn = document.querySelector(".create-event-btn") as HTMLButtonElement;
	const modalElem = document.querySelector(".modal") as HTMLDivElement;
	const modalFormElem = document.querySelector(".modal-form") as HTMLFormElement;
	const eventTitleElem = document.querySelector(".event-title") as HTMLInputElement;
	const closeBtn = document.querySelector(".modal-form > .close") as HTMLButtonElement;
	const cancelBtn = document.querySelector(".cancel") as HTMLButtonElement;
	const saveBtn = document.querySelector(".save") as HTMLButtonElement;
	const eventDescModalElem = document.querySelector(".event-desc-modal") as HTMLDivElement;

	document.addEventListener("click", () => {
		eventDescModalElem.classList.add("non-displayed");
		eventDescModalElem.classList.add("non-displayed");
	});

	document.addEventListener("keyup", e => {
		if (e.key === "Escape") modalElem.classList.add("non-displayed");
	});

	menuBtn.onclick = () => mainMenuBtn.classList.toggle("non-displayed");

	createEventBtn.onclick = e => {
		modalFormElem.reset();
		modalElem.classList.toggle("non-displayed");
		eventTitleElem.focus();
		e.stopPropagation();
	};

	modalElem.onclick = e => e.stopPropagation();

	modalFormElem.addEventListener("submit", e => {
		e.preventDefault();
		const event = createEventObject();
		const extEvent = createExtendedEventObject(event);
		const extEvents = calendarInfo.extEvents;
		saveEventToStorage(event, extEvent, extEvents);
		modalElem.classList.toggle("non-displayed");
		renderEvent(extEvent, extEvents);
		updateAllEventElementsStyles(extEvent, extEvents);
		modalFormElem.reset();
	});

	closeBtn.onclick = () => {
		modalElem.classList.add("non-displayed");
		modalFormElem.reset();
	};

	cancelBtn.onclick = () => {
		modalElem.classList.add("non-displayed");
		modalFormElem.reset();
	};

	saveBtn.onclick = () => updateEventEndDateInputError(isCorrectDate());

	eventDescModalElem.addEventListener("click", e => {
		e.stopPropagation();
	});

	todayBtn.onclick = () => {
		calendarInfo.stateDate = new Date();
		calendarInfo.overviewDate = new Date();
		updateCalendar(calendarInfo);
	};

	nextWeekViewBtn.onclick = () => {
		calendarInfo.stateDate.setDate(calendarInfo.stateDate.getDate() + 7);
		calendarInfo.overviewDate = new Date(calendarInfo.stateDate);
		updateCalendar(calendarInfo);
	};

	prevWeekViewBtn.onclick = () => {
		calendarInfo.stateDate.setDate(calendarInfo.stateDate.getDate() - 7);
		calendarInfo.overviewDate = new Date(calendarInfo.stateDate);
		updateCalendar(calendarInfo);
	};

	nextMonthViewBtn.onclick = () => {
		calendarInfo.overviewDate.setMonth(calendarInfo.overviewDate.getMonth() + 1, 1);
		updateMiniCalendar(calendarInfo);
	};

	prevMonthViewBtn.onclick = () => {
		calendarInfo.overviewDate.setMonth(calendarInfo.overviewDate.getMonth() - 1, 1);
		updateMiniCalendar(calendarInfo);
	};

	createTable(24, 7);
	updateCalendar(calendarInfo);
};

document.addEventListener("DOMContentLoaded", () => {
	init();
});
