import { CalendarInfo, ExtendedEvent } from "../../types.js";
import { getTableCell } from "../getters/getTableCell.js";
import { getEventTopPos } from "../getters/getEventTopPos.js";
import { getEventLeftPos } from "../getters/getEventLeftPos.js";
import { getEventHeight } from "../getters/getEventHeight.js";
import { getEventWidth } from "../getters/getEventWidth.js";
import { getEventZIndex } from "../getters/getEventZIndex.js";

export function updateEventElementStyle(eventElem: HTMLDivElement, extEvent: ExtendedEvent, calendarInfo: CalendarInfo): void {
	let { startDate, endDate, minutes } = extEvent;
	const tableCell = getTableCell(extEvent);
	eventElem.style.top = getEventTopPos(tableCell, minutes);
	eventElem.style.left = getEventLeftPos(eventElem, startDate, calendarInfo);
	eventElem.style.height = getEventHeight(tableCell, eventElem, startDate, endDate);
	eventElem.style.width = getEventWidth(eventElem, startDate, calendarInfo);
	eventElem.style.zIndex = getEventZIndex(eventElem, startDate, calendarInfo);
}
