import { updateMonthAndYear } from "./src/updateMonthAndYear.js";
import { updateWeekdays } from "./src/updateWeekdays.js";
import { updateMonthOverview } from "./src/updateMonthOverview.js";
import { createTable } from "./src/createTable.js";

// Need a general func which updates (calls other funcs) the header, calendar position, month overview,
// renames month if needed and rerenders the calendar with that week's events.
const calendarInfo = {
	stateDate: new Date(),
	overviewDate: new Date(),
};

const menuBtn = document.querySelector(".menu-btn");
const mainMenuBtn = document.querySelector(".main-menu");
const todayBtn = document.querySelector(".today-btn");
const nextWeekViewBtn = document.querySelector(".nav-arrow.arrow-right");
const prevWeekViewBtn = document.querySelector(".nav-arrow.arrow-left");
const nextMonthViewBtn = document.querySelector(".nav-arrow-small.arrow-right");
const prevMonthViewBtn = document.querySelector(".nav-arrow-small.arrow-left");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const createEventBtn = document.querySelector(".create-event-btn");

menuBtn.onclick = () => {
	mainMenuBtn.classList.toggle("non-displayed");
};

createEventBtn.onclick = () => {
	modal.classList.toggle("non-displayed");
};

closeBtn.onclick = () => {
	modal.classList.toggle("non-displayed");
};

todayBtn.onclick = () => {
	calendarInfo.stateDate = new Date();
	calendarInfo.overviewDate = new Date();
	updateWeekdays(calendarInfo);
	updateMonthAndYear(calendarInfo);
	updateMonthOverview(calendarInfo);
};

nextWeekViewBtn.onclick = () => {
	calendarInfo.stateDate.setDate(calendarInfo.stateDate.getDate() + 7);
	calendarInfo.overviewDate = new Date(calendarInfo.stateDate);
	updateWeekdays(calendarInfo);
	updateMonthAndYear(calendarInfo);
	updateMonthOverview(calendarInfo);
};

prevWeekViewBtn.onclick = () => {
	calendarInfo.stateDate.setDate(calendarInfo.stateDate.getDate() - 7);
	calendarInfo.overviewDate = new Date(calendarInfo.stateDate);
	updateWeekdays(calendarInfo);
	updateMonthAndYear(calendarInfo);
	updateMonthOverview(calendarInfo);
};

nextMonthViewBtn.onclick = () => {
	calendarInfo.overviewDate.setMonth(calendarInfo.overviewDate.getMonth() + 1, 1);
	updateMonthAndYear(calendarInfo);
	updateMonthOverview(calendarInfo);
};

prevMonthViewBtn.onclick = () => {
	calendarInfo.overviewDate.setMonth(calendarInfo.overviewDate.getMonth() - 1, 1);
	updateMonthAndYear(calendarInfo);
	updateMonthOverview(calendarInfo);
};

createTable(24, 7);
updateWeekdays(calendarInfo);
updateMonthAndYear(calendarInfo);
updateMonthOverview(calendarInfo);
modal.classList.add("non-displayed");
