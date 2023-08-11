import { updateWeekdays } from "./updateWeekdays.js";
import { updateMonthAndYear } from "./updateMonthAndYear.js";
import { updateMonthOverview } from "./updateMonthOverview.js";
import { removeEventElements } from "./removeEventElements.js";
import { renderEvents } from "./renderEvents.js";

export function updateCalendar(calendarInfo) {
	updateWeekdays(calendarInfo);
	updateMonthAndYear(calendarInfo);
	updateMonthOverview(calendarInfo);
	removeEventElements();
	renderEvents(calendarInfo);
}
