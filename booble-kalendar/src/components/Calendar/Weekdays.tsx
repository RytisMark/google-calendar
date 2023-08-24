import { isSameDay } from "../../utils/checkers/isSameDay";
import { getDateNthDaysFromCurrent } from "../../utils/getters/getDateNthDaysFromCurrent";

export function Weekdays({ stateDate }: { stateDate: Date }) {
	const weekdayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
	let tempDate = new Date();
	const today = new Date();
	const currDayOfTheWeek = stateDate.getDay() || 7;

	const weekdays = [];
	for (let day = 0; day < 7; day++) {
		tempDate = getDateNthDaysFromCurrent(stateDate, day - currDayOfTheWeek + 1);
		let classList = "";
		if (isSameDay(tempDate, today)) classList = "present-day";

		const weekdayNum = <span className={classList + " day-of-month"}>{tempDate.getDate().toString()}</span>;
		const weekdayName = <span className={classList + " day-of-week"}>{weekdayNames[day]}</span>;
		const weekday = (
			<div key={day} className="weekday">
				{weekdayName} {weekdayNum}
			</div>
		);

		weekdays.push(weekday);
	}
	return <div className="weekdays">{weekdays}</div>;
}
