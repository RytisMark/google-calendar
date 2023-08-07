export function renderEvent(newEvent) {
	let { eventTitle, startDateTxt, endDateTxt, description } = newEvent;
	const startDate = new Date(startDateTxt);
	const endDate = new Date(endDateTxt);
	const startHour = startDate.getHours();
	const endHour = endDate.getHours();

	const eventElement = document.createElement("div");
	eventElement.classList.add("event");
	eventElement.textContent = eventTitle;
	const columnNum = startDate.getDay() || 7;
	const weekViewTable = document.querySelector(".week-view-table");
	const tableCol = weekViewTable.querySelector(`:nth-child(${columnNum})`);
	const tableCell = tableCol.querySelector(`:nth-child(${startHour})`);

	tableCol.append(eventElement);
}
