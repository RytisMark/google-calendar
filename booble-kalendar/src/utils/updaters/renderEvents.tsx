import { renderEvent } from "./renderEvent.js";
import { isSameWeek } from "../checkers/isSameWeek.js";
import { CalendarInfo } from "../../types.js";

export function renderEvents(calendarInfo: CalendarInfo) {
	const { stateDate, extEvents } = calendarInfo;

	extEvents.forEach(extEvent => {
		const startDate = extEvent.startDate;
		if (isSameWeek(stateDate, startDate)) {
			renderEvent(extEvent, extEvents);
		}
	});
}
