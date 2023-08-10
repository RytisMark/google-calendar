import { createTable } from "./src/utils/generators/createTable.js";
import { createEventObject } from "./src/utils/generators/createEventObject.js";
import { getEventIds } from "./src/utils/getters/getEventIds.js";
import { getEvents } from "./src/utils/getters/getEvents.js";
import { updateCalendar } from "./src/utils/updaters/updateCalendar.js";
import { updateMiniCalendar } from "./src/utils/updaters/updateMiniCalendar.js";
import { updateEventInputError } from "./src/utils/updaters/updateEventInputError.js";
import { isCorrectDate } from "./src/utils/checkers/isCorrectDate.js";
import { saveEventToStorage } from "./src/utils/updaters/saveEventToStorage.js";

const calendarInfo = {
	stateDate: new Date(),
	overviewDate: new Date(),
	// eventIds: getEventIds(),
	events: getEvents(),
};

const menuBtn = document.querySelector(".menu-btn");
const mainMenuBtn = document.querySelector(".main-menu");
const todayBtn = document.querySelector(".today-btn");
const nextWeekViewBtn = document.querySelector(".nav-arrow.arrow-right");
const prevWeekViewBtn = document.querySelector(".nav-arrow.arrow-left");
const nextMonthViewBtn = document.querySelector(".nav-arrow-small.arrow-right");
const prevMonthViewBtn = document.querySelector(".nav-arrow-small.arrow-left");
const createEventBtn = document.querySelector(".create-event-btn");
const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal-form");
const eventTitle = document.querySelector(".event-title");
const closeBtn = document.querySelector(".modal-form > .close-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const saveBtn = document.querySelector(".save-btn");
const eventDescModal = document.querySelector(".event-desc-modal");

menuBtn.onclick = () => {
	mainMenuBtn.classList.toggle("non-displayed");
};

createEventBtn.onclick = e => {
	modalForm.reset();
	modal.classList.toggle("non-displayed");
	eventTitle.focus();
	e.stopPropagation();
};

document.addEventListener("click", () => {
	modal.classList.add("non-displayed");
	eventDescModal.classList.add("non-displayed");
});

document.addEventListener("keyup", e => {
	if (e.key === "Escape") modal.classList.add("non-displayed");
});

modal.onclick = e => e.stopPropagation();

modalForm.addEventListener("submit", e => {
	e.preventDefault();
	saveEventToStorage(calendarInfo, createEventObject());
	modal.classList.toggle("non-displayed");
	updateCalendar(calendarInfo);
	modalForm.reset();
});

closeBtn.onclick = () => {
	modal.classList.add("non-displayed");
	modalForm.reset();
};

cancelBtn.onclick = () => {
	modal.classList.add("non-displayed");
	modalForm.reset();
};

saveBtn.onclick = () => updateEventInputError(isCorrectDate());

eventDescModal.addEventListener("click", e => {
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
