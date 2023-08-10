import { getDateNthDaysAway } from "../getters/getDateNthDaysAway.js";
import { getMonthName } from "../getters/getMonthName.js";

export function updateMonthAndYear(calendarInfo) {
	const { stateDate } = calendarInfo;

	const currDayOfTheWeek = stateDate.getDay() || 7;
	const tempDateMon = getDateNthDaysAway(stateDate, 1 - currDayOfTheWeek);
	const tempDateSun = getDateNthDaysAway(stateDate, 7 - currDayOfTheWeek);
	const monYear = tempDateMon.getFullYear();
	const sunYear = tempDateSun.getFullYear();
	const monDayOfMonth = tempDateMon.getDate();
	const sunDayOfMonth = tempDateSun.getDate();

	const firstJointMonth = getMonthName(tempDateMon).substring(0, 3);
	const secndJointMonth = getMonthName(tempDateSun).substring(0, 3);

	const jointYear = `${firstJointMonth} ${monYear} - ${secndJointMonth} ${sunYear}`;
	const jointMonth = `${firstJointMonth} - ${secndJointMonth} ${monYear}`;
	const singleHeaderDate = `${getMonthName(stateDate)} ${monYear}`;

	const overviewDate = calendarInfo.overviewDate;
	const singleOverviewDate = `${getMonthName(overviewDate)} ${overviewDate.getFullYear()}`;

	const headerDate = document.querySelector(".today-date");
	const miniCalendarDate = document.querySelector(".overview-date");

	if (monYear != sunYear) {
		headerDate.textContent = jointYear;
	} else if (monDayOfMonth > sunDayOfMonth) {
		headerDate.textContent = jointMonth;
	} else {
		headerDate.textContent = singleHeaderDate;
	}
	miniCalendarDate.textContent = singleOverviewDate;
}
