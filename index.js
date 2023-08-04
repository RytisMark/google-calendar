import { updateMonthAndYear } from "./src/updateMonthAndYear.js";
import { updateWeekdays } from "./src/updateWeekdays.js";
import { updateMonthOverview } from "./src/updateMonthOverview.js";
import { createTable } from "./src/createTable.js";
// import { createEvent } from "./src/createEvent.js";
import { getEventIds } from "./src/getEventIds.js";
import { generateEventId } from "./src/generateEventId.js";

// vienas eventas, vienas issaugojimas, kiekvienas turi ID
// ivedu duomenis, paspaudziu save, tuos duomenis paima, sukuria event objekta, kuri ideda i localstorage ir ji surenderina ant kalendoriaus.

// Need a general func which updates (calls other funcs) the header, calendar position, month overview,
// renames month if needed and rerenders the calendar with that week's events.
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
const closeBtn = document.querySelector(".close-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const saveBtn = document.querySelector(".save-btn");

menuBtn.onclick = () => {
	mainMenuBtn.classList.toggle("non-displayed");
};

createEventBtn.onclick = () => {
	modal.classList.toggle("non-displayed");
};

closeBtn.onclick = () => {
	modal.classList.toggle("non-displayed");
};

cancelBtn.onclick = () => {
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

const modalForm = document.querySelector(".modal-form");
modalForm.addEventListener("submit", e => {
	e.preventDefault();
	const eventTitle = document.querySelector(".event-title").value;
	const startDateTxt = document.querySelector(".start-date").value;
	const startDate = new Date(startDateTxt);
	const endHourTxt = document.querySelector(".end-date").value;
	const endDateTxt = startDateTxt.slice(0, -5) + endHourTxt;
	const endDate = new Date(endDateTxt);
	const description = document.querySelector(".description").value;
	// checkLimits(startDate, endDate);
	// console.log(eventTitle, "enddate", endDateTxt, endDate, "description", description);

	// console.log(calendarInfo);
	const newEvent = {
		eventId: generateEventId(calendarInfo),
		eventTitle,
		startDate,
		endDate,
		description,
	};

	console.log("evento kurimas", newEvent);
	console.log("hellssssssso", newEvent.eventId, JSON.stringify(newEvent));
	localStorage.setItem(newEvent.eventId, JSON.stringify(newEvent));
	renderEvent(newEvent);
});

function renderAll() {
	console.log(localStorage);
	if (localStorage.length === 0) return;
	for (let i = 1; i <= localStorage.length; i++) {
		renderEvent(JSON.parse(localStorage.getItem(i)));
	}
}

function renderEvent(newEvent) {
	let { eventTitle, startDate, endDate, description } = newEvent;
	startDate = new Date(startDate);
	endDate = new Date(endDate);
	const eventElement = document.createElement("div");
	eventElement.textContent = eventTitle;
	eventElement.classList.add("event");
	console.log(newEvent);
	console.log(startDate);
	const columnNum = startDate.getDay() || 7;
	const weekViewTable = document.querySelector(".week-view-table");
	const tableCol = weekViewTable.querySelector(`:nth-child(${columnNum})`);
	tableCol.append(eventElement);

	console.log(newEvent, eventElement);
}

renderAll();
