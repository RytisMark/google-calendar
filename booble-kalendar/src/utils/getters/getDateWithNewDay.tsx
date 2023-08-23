export function getDateWithNewDay(date: Date, newDay: number) {
	return new Date(date.getFullYear(), date.getMonth(), newDay);
}
