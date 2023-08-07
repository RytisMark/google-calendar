import { createTable } from "./src/createTable.js";
import { createEvent } from "./src/createEvent.js";
import { getEventIds } from "./src/getEventIds.js";
import { updateCalendar } from "./src/updateCalendar.js";
import { updateMiniCalendar } from "./src/updateMiniCalendar.js";
import { checkLimits } from "./src/checkLimits.js";

const calendarInfo = {
	stateDate: new Date(),
	overviewDate: new Date(),
	eventIds: getEventIds(),
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
const closeBtn = document.querySelector(".close-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const saveBtn = document.querySelector(".save-btn");

menuBtn.onclick = () => {
	mainMenuBtn.classList.toggle("non-displayed");
};

createEventBtn.onclick = () => {
	modal.classList.toggle("non-displayed");
};

modalForm.addEventListener("submit", e => {
	e.preventDefault();
	createEvent(calendarInfo);
	updateCalendar(calendarInfo);
});

saveBtn.onclick = () => checkLimits();

closeBtn.onclick = () => {
	modal.classList.toggle("non-displayed");
};

cancelBtn.onclick = () => {
	modal.classList.toggle("non-displayed");
};

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
