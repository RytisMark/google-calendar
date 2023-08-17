export function getEventStartPos(tableCell: HTMLDivElement, startMinutes: number) {
	const cellHeight = parseFloat(getComputedStyle(tableCell).height);
	return (cellHeight / 60) * startMinutes;
}
