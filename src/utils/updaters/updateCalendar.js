import { updateWeekdays } from "./updateWeekdays.js";
import { updateMonthAndYear } from "./updateMonthAndYear.js";
import { updateMonthOverview } from "./updateMonthOverview.js";
import { removeEventElems } from "./removeEventElems.js";
import { renderEvents } from "./renderEvents.js";

export function updateCalendar(calendarInfo) {
	updateWeekdays(calendarInfo);
	updateMonthAndYear(calendarInfo);
	updateMonthOverview(calendarInfo);
	removeEventElems();
	renderEvents(calendarInfo);
}