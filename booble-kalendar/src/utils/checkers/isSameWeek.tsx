import { getDateNthDaysFromCurrent } from "../getters/getDateNthDaysFromCurrent.js";

export function isSameWeek(firstDate: Date, secondDate: Date) {
	const dayOfTheWeekFirstDate = firstDate.getDay() || 7;
	const dayOfTheWeekSecondDate = secondDate.getDay() || 7;

	const firstDateMonTime = getDateNthDaysFromCurrent(firstDate, 1 - dayOfTheWeekFirstDate).getTime();
	const secondDateMonTime = getDateNthDaysFromCurrent(secondDate, 1 - dayOfTheWeekSecondDate).getTime();

	return firstDateMonTime === secondDateMonTime;
}
