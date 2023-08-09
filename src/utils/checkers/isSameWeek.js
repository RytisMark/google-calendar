import { getDateNthDaysAway } from "../getters/getDateNthDaysAway.js";

export function isSameWeek(firstDate, secndDate) {
	const dayOfTheWeekFirstDate = firstDate.getDay() || 7;
	const dayOfTheWeekSecndDate = secndDate.getDay() || 7;

	const firstDateMonTime = getDateNthDaysAway(firstDate, 1 - dayOfTheWeekFirstDate).getTime();
	const secndDateMonTime = getDateNthDaysAway(secndDate, 1 - dayOfTheWeekSecndDate).getTime();

	return firstDateMonTime === secndDateMonTime;
}
