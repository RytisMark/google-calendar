import { updateMonthAndYear } from "./updateMonthAndYear.js";
import { updateMonthOverview } from "./updateMonthOverview.js";

export function updateMiniCalendar() {
	updateMonthAndYear(calendarInfo);
	updateMonthOverview(calendarInfo);
}
