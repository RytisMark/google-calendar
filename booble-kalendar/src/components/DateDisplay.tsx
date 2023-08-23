import { getDateNthDaysFromCurrent } from "../utils/getters/getDateNthDaysFromCurrent";
import { getMonthName } from "../utils/getters/getMonthName";

export function DateDisplay({ selectedDate, classList }: { selectedDate: Date; classList: string }) {
	const currDayOfTheWeek = selectedDate.getDay() || 7;
	const tempDateMon = getDateNthDaysFromCurrent(selectedDate, 1 - currDayOfTheWeek);
	const tempDateSun = getDateNthDaysFromCurrent(selectedDate, 7 - currDayOfTheWeek);
	const monYear = tempDateMon.getFullYear();
	const sunYear = tempDateSun.getFullYear();
	const monDayOfMonth = tempDateMon.getDate();
	const sunDayOfMonth = tempDateSun.getDate();

	const firstJointMonth = getMonthName(tempDateMon).substring(0, 3);
	const secondJointMonth = getMonthName(tempDateSun).substring(0, 3);

	const jointYear = `${firstJointMonth} ${monYear} - ${secondJointMonth} ${sunYear}`;
	const jointMonth = `${firstJointMonth} - ${secondJointMonth} ${monYear}`;
	const singleHeaderDate = `${getMonthName(selectedDate)} ${monYear}`;

	const singleOverviewDate = `${getMonthName(selectedDate)} ${selectedDate.getFullYear()}`;

	let mainDate = "";
	if (monYear !== sunYear) {
		mainDate = jointYear;
	} else if (monDayOfMonth > sunDayOfMonth) {
		mainDate = jointMonth;
	} else {
		mainDate = singleHeaderDate;
	}
	const secondaryDate = singleOverviewDate;

	return (
		<>
			<div className={classList}>{classList === "today-date" ? mainDate : secondaryDate}</div>
		</>
	);
}
