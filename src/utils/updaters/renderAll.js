import { renderEvent } from "./renderEvent.js";
import { isSameWeek } from "../checkers/isSameWeek.js";

export function renderAll(calendarInfo) {
	const { stateDate, events } = calendarInfo;

	if (events.length === 0) return;
	for (let i = 0; i < events.length; i++) {
		const eventObj = events[i];
		const eventStartDate = new Date(eventObj.startDateTxt);
		if (isSameWeek(stateDate, eventStartDate)) {
			renderEvent(eventObj, calendarInfo);
		}
	}
}
