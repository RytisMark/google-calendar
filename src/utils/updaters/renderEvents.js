import { renderEvent } from "./renderEvent.js";
import { isSameWeek } from "../checkers/isSameWeek.js";

export function renderEvents(calendarInfo) {
	const { stateDate, extEvents } = calendarInfo;

	extEvents.forEach(extEvent => {
		const startDate = extEvent.startDate;
		if (isSameWeek(stateDate, startDate)) {
			renderEvent(extEvent, calendarInfo);
		}
	});
}
