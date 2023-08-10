import { createEvent } from "../generators/createEvent.js";
import { getEventTime } from "../getters/getEventTime.js";

export function renderEvent(eventObj, calendarInfo) {
	let { startDateTxt, endDateTxt } = eventObj;
	const startDate = new Date(startDateTxt);
	const endDate = new Date(endDateTxt);
	const eventTime = getEventTime(startDate, endDate);
	const startHour = parseInt(eventTime.slice(0, 2), 10);

	const columnNum = startDate.getDay() || 7;
	const weekViewTable = document.querySelector(".week-view-table");
	const tableCol = weekViewTable.querySelector(`:nth-child(${columnNum} of .table-column)`);
	const tableCell = tableCol.querySelector(`:nth-child(${startHour + 1})`);

	tableCell.append(createEvent(eventObj, calendarInfo));
}

// const getTableCell = (event) => {
// 	const columnNum = date.getDay() || 7;
// 	const weekViewTable = document.querySelector(".week-view-table");
// 	const tableCol = weekViewTable.querySelector(`:nth-child(${columnNum} of .table-column)`);

// 	return tableCol.querySelector(`:nth-child(${startHour + 1})`);

// }
