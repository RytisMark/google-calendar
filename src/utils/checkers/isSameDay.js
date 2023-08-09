import { getDateNthDaysAway } from "../getters/getDateNthDaysAway.js";

export function isSameDay(firstDate, secndDate) {
	const firstDateMonTime = getDateNthDaysAway(firstDate, 0).getTime();
	const secndDateMonTime = getDateNthDaysAway(secndDate, 0).getTime();

	return firstDateMonTime === secndDateMonTime;
}
