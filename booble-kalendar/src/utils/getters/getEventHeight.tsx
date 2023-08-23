export function getEventHeight(tableCell: HTMLDivElement, eventElem: HTMLDivElement, startDate: Date, endDate: Date): string {
	const cellHeight = parseFloat(getComputedStyle(tableCell).height);
	const minHeight = parseFloat(getComputedStyle(eventElem).minHeight);
	let eventHeight = (cellHeight / 60) * ((endDate.getTime() - startDate.getTime()) / 60000);
	if (eventHeight < minHeight) eventHeight = minHeight;
	return `${eventHeight}px`;
}
