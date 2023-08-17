export function getEventHeight(tableCell: HTMLDivElement, startDate: Date, endDate: Date) {
	const cellHeight = parseFloat(getComputedStyle(tableCell).height);
	let eventHeight = (cellHeight / 60) * ((endDate.getTime() - startDate.getTime()) / 60000);
	if (eventHeight < 20) eventHeight = 20;
	return eventHeight;
}
