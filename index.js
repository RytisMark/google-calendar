import { createTable } from "./src/utils/generators/createTable.js";
import { createEventObject } from "./src/utils/generators/createEventObject.js";
import { createExtendedEventObject } from "./src/utils/generators/createExtendedEventObject.js";
import { getEvents } from "./src/utils/getters/getEvents.js";
import { getExtEvents } from "./src/utils/getters/getExtEvents.js";
import { updateCalendar } from "./src/utils/updaters/updateCalendar.js";
import { updateMiniCalendar } from "./src/utils/updaters/updateMiniCalendar.js";
import { updateEventInputError } from "./src/utils/updaters/updateEventInputError.js";
import { isCorrectDate } from "./src/utils/checkers/isCorrectDate.js";
import { saveEventToStorage } from "./src/utils/updaters/saveEventToStorage.js";
import { renderEvent } from "./src/utils/updaters/renderEvent.js";

const calendarInfo = {
	stateDate: new Date(),
	overviewDate: new Date(),
	extEvents: getExtEvents(getEvents()),
};

const menuBtn = document.querySelector(".menu-btn");
const mainMenuBtn = document.querySelector(".main-menu");
const todayBtn = document.querySelector(".today-btn");
const nextWeekViewBtn = document.querySelector(".nav-arrow.arrow-right");
const prevWeekViewBtn = document.querySelector(".nav-arrow.arrow-left");
const nextMonthViewBtn = document.querySelector(".nav-arrow-small.arrow-right");
const prevMonthViewBtn = document.querySelector(".nav-arrow-small.arrow-left");
const createEventBtn = document.querySelector(".create-event-btn");
const modalElem = document.querySelector(".modal");
const modalFormElem = document.querySelector(".modal-form");
const eventTitleElem = document.querySelector(".event-title");
const closeBtn = document.querySelector(".modal-form > .close-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const saveBtn = document.querySelector(".save-btn");
const eventDescModalElem = document.querySelector(".event-desc-modal");

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
	saveEventToStorage(event, extEvent, calendarInfo);
	modalElem.classList.toggle("non-displayed");
	renderEvent(extEvent, calendarInfo);
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

saveBtn.onclick = () => updateEventInputError(isCorrectDate());

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
