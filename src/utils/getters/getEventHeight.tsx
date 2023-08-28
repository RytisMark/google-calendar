export function getEventHeight(startDate: Date, endDate: Date): string {
	return `${((100 / 60) * (endDate.getTime() - startDate.getTime())) / 60000}%`;
}
