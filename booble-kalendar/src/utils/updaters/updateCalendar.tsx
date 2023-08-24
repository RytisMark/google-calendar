import { updateMonthOverview } from "./updateMonthOverview.js";
import { removeEventElements } from "./removeEventElements.js";
import { renderEvents } from "./renderEvents.js";
import { CalendarInfo } from "../../types.js";

export function updateCalendar(calendarInfo: CalendarInfo) {
	// updateWeekdays(calendarInfo);
	// updateMonthAndYear(calendarInfo);
	updateMonthOverview(calendarInfo);
	removeEventElements();
	renderEvents(calendarInfo);
}
