import { CalendarInfo } from "../../types.js";
import { getEventLeftPos } from "./getEventLeftPos.js";
import { getEventMaxWidth } from "./getEventMaxWidth.js";

export function getEventWidth(eventElem: HTMLDivElement, startDate: Date, calendarInfo: CalendarInfo): string {
	return `calc(${getEventMaxWidth()} - ${getEventLeftPos(eventElem, startDate, calendarInfo)})`;
}
