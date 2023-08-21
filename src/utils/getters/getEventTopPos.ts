export function getEventTopPos(tableCell: HTMLDivElement, startMinutes: number): string {
	const cellHeight = parseFloat(getComputedStyle(tableCell).height);
	return `${(cellHeight / 60) * startMinutes}px`;
}
