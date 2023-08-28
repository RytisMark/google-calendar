import { ExtendedEvent } from "../../types";
import { isSameWeek } from "../checkers/isSameWeek";

export function getSameTableCellEvents(stateDate: Date, columnIndex: number, cellIndex: number, extEvents: ExtendedEvent[]) {
	return extEvents.filter(extEvent => {
		const startDate = extEvent.startDate;
		const extEventWeekday = (startDate.getDay() || 7) - 1;
		const extEventHour = startDate.getHours();
		if (isSameWeek(stateDate, startDate) && columnIndex === extEventWeekday && cellIndex === extEventHour) {
			return true;
		} else {
			return false;
		}
	});
}
