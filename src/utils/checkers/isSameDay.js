import { getDateNthDaysFromCurrent } from "../getters/getDateNthDaysFromCurrent.js";

export function isSameDay(firstDate, secondDate) {
	const firstDateTime = getDateNthDaysFromCurrent(firstDate, 0).getTime();
	const secondDateTime = getDateNthDaysFromCurrent(secondDate, 0).getTime();
	return firstDateTime === secondDateTime;
}
