import { renderEvent } from "./renderEvent.js";
import { isSameWeek } from "../checkers/isSameWeek.js";

export function renderEvents(calendarInfo) {
	const { stateDate, extEvents } = calendarInfo;

	if (extEvents.length === 0) return;
	for (let i = 0; i < extEvents.length; i++) {
		const extEvent = extEvents[i];
		const startDate = extEvent.startDate;
		if (isSameWeek(stateDate, startDate)) {
			renderEvent(extEvent, calendarInfo);
		}
	}
}
