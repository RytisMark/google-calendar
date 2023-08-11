import { getDoubleDigitTime } from "./getDoubleDigitTime.js";

export function getEventTime(startDate, endDate) {
	const startHour = getDoubleDigitTime(startDate.getHours());
	const startMinutes = getDoubleDigitTime(startDate.getMinutes());
	const endHour = getDoubleDigitTime(endDate.getHours());
	const endMinutes = getDoubleDigitTime(endDate.getMinutes());
	return `${startHour}:${startMinutes} - ${endHour}:${endMinutes}`;
}
