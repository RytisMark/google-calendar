// import { generateEventId } from "./generateEventId.js";

// export function createEvent(calendarInfo) {
// 	const eventTitle = document.querySelector(".event-title").value;
// 	const startDateTxt = document.querySelector(".start-date").value;
// 	const startDate = new Date(startDateTxt);
// 	const endHourTxt = document.querySelector(".end-date").value;
// 	const endDateTxt = startDateTxt.slice(0, -5) + endHourTxt;
// 	const endDate = new Date(endDateTxt);
// 	const description = document.querySelector(".description").value;
// 	// checkLimits(startDate, endDate);
// 	console.log(eventTitle, "enddate", endDateTxt, endDate, "description", description);
// 	// setTimeout(() => {}, 10000);
// 	// throw new Error("Something went badly wrong!");

// 	const newEvent = {
// 		eventId: generateEventId(calendarInfo),
// 		eventTitle,
// 		startDate,
// 		endDate,
// 		description,
// 	};

// 	localStorage.setItem(newEvent.eventId, JSON.stringify(newEvent));
// }
