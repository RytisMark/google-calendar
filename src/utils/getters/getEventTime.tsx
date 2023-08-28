import { getDoubleDigitTime } from "./getDoubleDigitTime";

export function getEventTime(startDate: Date, endDate: Date) {
	const startHour = getDoubleDigitTime(startDate.getHours());
	const startMinutes = getDoubleDigitTime(startDate.getMinutes());
	const endHour = getDoubleDigitTime(endDate.getHours());
	const endMinutes = getDoubleDigitTime(endDate.getMinutes());
	return `${startHour}:${startMinutes} - ${endHour}:${endMinutes}`;
}
