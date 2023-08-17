import { CalendarInfo } from "../../types.js";
import { updateMonthAndYear } from "./updateMonthAndYear.js";
import { updateMonthOverview } from "./updateMonthOverview.js";

export function updateMiniCalendar(calendarInfo: CalendarInfo) {
	updateMonthAndYear(calendarInfo);
	updateMonthOverview(calendarInfo);
}
