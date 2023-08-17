import { CalendarInfo, ExtendedEvent } from "../../types.js";
import { createEventElem } from "../generators/createEventElem.js";
import { getTableCell } from "../getters/getTableCell.js";

export function renderEvent(extEvent: ExtendedEvent, calendarInfo: CalendarInfo) {
	const tableCell = getTableCell(extEvent);
	tableCell.append(createEventElem(extEvent, calendarInfo));
}
