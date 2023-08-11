export function getEventStartPos(tableCell, startMinutes) {
	const cellHeight = parseFloat(getComputedStyle(tableCell).height, 10);
	return (cellHeight / 60) * startMinutes;
}
