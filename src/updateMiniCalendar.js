import { updateMonthAndYear } from "./updateMonthAndYear.js";
import { updateMonthOverview } from "./updateMonthOverview.js";

export function updateMiniCalendar(calendarInfo) {
	updateMonthAndYear(calendarInfo);
	updateMonthOverview(calendarInfo);
}
