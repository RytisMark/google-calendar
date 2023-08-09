export function getEventHeight(tableCell, startDate, endDate) {
	const cellHeight = parseFloat(getComputedStyle(tableCell).height, 10);
	let eventHeight = (cellHeight / 60) * ((endDate - startDate) / 60000);
	if (eventHeight < 20) eventHeight = 20;
	return eventHeight;
}
