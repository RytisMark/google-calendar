import { ExtendedEvent } from "../../types";
import { getTableCell } from "../getters/getTableCell";
import { getEventTopPos } from "../getters/getEventTopPos";
import { getEventLeftPos } from "../getters/getEventLeftPos";
import { getEventHeight } from "../getters/getEventHeight";
import { getEventWidth } from "../getters/getEventWidth";
import { getEventZIndex } from "../getters/getEventZIndex";

export function updateEventElementStyle(eventElem: HTMLDivElement, extEvent: ExtendedEvent, extEvents: ExtendedEvent[]): void {
	let { startDate, endDate, minutes } = extEvent;
	const tableCell = getTableCell(extEvent);
	eventElem.style.top = getEventTopPos(tableCell, minutes);
	eventElem.style.left = getEventLeftPos(eventElem, startDate, extEvents);
	eventElem.style.height = getEventHeight(tableCell, eventElem, startDate, endDate);
	eventElem.style.width = getEventWidth(eventElem, startDate, extEvents);
	eventElem.style.zIndex = getEventZIndex(eventElem, startDate, extEvents);
}
