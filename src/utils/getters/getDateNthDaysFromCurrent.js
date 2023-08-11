export function getDateNthDaysFromCurrent(date, nthDays) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate() + nthDays);
}
